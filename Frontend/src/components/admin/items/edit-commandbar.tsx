import { useNavigate, useParams } from "react-router-dom"
import { useCreateItemPictureMutation, useDeleteItemMutation } from "./service"
import { Link } from "../../catalyst/link"
import { ChangeEvent, useState } from "react"
import { uploadData } from 'aws-amplify/storage'
import { enqueueSnackbar } from "notistack"

export default function EditItemCommandBar() {
    const params = useParams() as { Id: string }
    const [deleteItem] = useDeleteItemMutation()
    const navigate = useNavigate()
    const [file, setFile] = useState<File>()
    const [createItemPicture] = useCreateItemPictureMutation()

    async function handleDelete() {
        navigate('/admin/items')
        deleteItem(params)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const f: File | undefined = event.target.files?.[0]
        if (f) {
            setFile(f)
        }
    }


    const onClickUploadPicture = async () => {
        if (file) {
            const filename = `${new Date().getTime()} ${file.name}`;
            await uploadData({
                path: `item-pictures/${filename}`,
                data: file
            }).result;
            await createItemPicture({
                ItemId: params.Id,
                PictureUrl: filename
            })

            enqueueSnackbar('Uploaded successfully', { variant: 'success' })
   
        }
    }

    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/admin/items">Back</Link>
                </li>
                <li>
                    <input type="file" onChange={handleChange} />
                    <button onClick={onClickUploadPicture}>
                        Upload Picture
                    </button>
                </li>
                <li>
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    )
}