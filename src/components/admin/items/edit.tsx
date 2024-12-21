/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../../catalyst/fieldset";
import { Input } from "../../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { ErrorBox } from "../../ErrorBox";
import { Button } from "../../catalyst/button";
import { useItemByIdQuery, useUpdateItemMutation } from "./service";
import EditItemCommandBar from "./edit-commandbar";
import SkeletonDocument from "../../SkeletonDocument";
import { Picture } from "../../Picture";
import { Item } from "../../../decl";

export default function EditItem() {
    const params = useParams() as { Id: string }
    const { data, isLoading, error } = useItemByIdQuery(params)
    const item = data

    if (error) return <ErrorBox errorMessage={error} />


    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Item - {item?.Id}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditItemCommandBar />
            { isLoading && <SkeletonDocument   fields={['Id', 'Name', 'Phone No', 'Email', '']} /> }
            { !isLoading && <EditItemForm item={item!} /> }
        </div>
    )

}


function EditItemForm({ item }: { item: Item }) {
    const readOnly = false;
    const [form, setForm] = useState(item)
    const [updateItem, { isLoading }] = useUpdateItemMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updateItem(form)
    }

    return (

        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>Id</Label>
                        <Input value={form.Id} name="Id" readOnly={true} onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input value={form.Description} readOnly={readOnly} name="Description" onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Unit Price</Label>
                        <Input value={form.UnitPrice} readOnly={readOnly} name="UnitPrice" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Detailed Description</Label>
                        <Input value={form.DetailedDescription} readOnly={readOnly} name="DetailedDescription" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Model</Label>
                        <Input value={form.Model} readOnly={readOnly} name="Model" onChange={onFormChange} />
                    </div>


                </div>
            </Fieldset>
            <ul className="mt-4">
                { item.Pictures.map(picture => (
                    <li key={picture.PictureUrl}>
                        <Picture picture={picture.PictureUrl} />
                    </li>
                ))}
            </ul>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}






