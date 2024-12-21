
import { Fieldset, Label } from "../../catalyst/fieldset";
import { Input } from "../../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../catalyst/button";
import { useCreateItemMutation } from "./service";
import { Heading } from "../../catalyst/heading";
import { Item } from "../../../decl";


export default function NewItem() {
    return (
        <div className="p-2">
            <Heading>New Item</Heading>
            <NewItemForm  />
        </div>
    )
}


function NewItemForm() {
    const readOnly = false;
    const [form, setForm] = useState<Item>({
        Id: '',
        Description: '',
        UnitPrice: 0,
        Model: '',
        DetailedDescription: '',
        Pictures: []
    })
    const navigate = useNavigate()
    const [createItem, { isLoading }] = useCreateItemMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createItem(form)
        if (!r.error)
            navigate(`/admin/items/${r.data?.Id}`)
    }

    return (
        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>Id</Label>
                        <Input value={form.Id} name="Id" readOnly={readOnly} onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Name</Label>
                        <Input value={form.Description} readOnly={readOnly} name="Description" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Price</Label>
                        <Input value={form.UnitPrice} readOnly={readOnly} name="UnitPrice" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Detailed Description</Label>
                        <Input value={form.DetailedDescription} readOnly={readOnly} name="DetailedDescription" type="text" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Model</Label>
                        <Input value={form.Model} readOnly={readOnly} name="Model" onChange={onFormChange} />
                    </div>
                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}








