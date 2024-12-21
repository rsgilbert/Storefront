import { useNavigate, useParams } from "react-router-dom"
import { useCreateItemPictureMutation, useDeleteItemMutation } from "./service"
import { Link } from "../../catalyst/link"
import { ChangeEvent, useState } from "react"
import { uploadData } from 'aws-amplify/storage'
import { enqueueSnackbar } from "notistack"
import { Dialog, DialogTitle } from "../../catalyst/dialog"
import { Input, } from '../../catalyst/input'
import { Button } from '../../catalyst/button'
import { errorMessageFor } from "../../../data"
import { DialogBody, DialogActions } from "../../catalyst/dialog"

export default function EditItemCommandBar() {
    const params = useParams() as { Id: string }
    const [deleteItem] = useDeleteItemMutation()
    const navigate = useNavigate()

    const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
    async function handleUploadAttachment() {
        setIsUploadDialogOpen(true)
    }


    async function handleDelete() {
        navigate('/admin/items')
        deleteItem(params)
    }

    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/admin/items">Back</Link>
                </li>
                <li>
                    <button onClick={handleUploadAttachment}>
                        Upload Picture
                    </button>
                    <FileUploadDialog isOpen={isUploadDialogOpen} setIsOpen={setIsUploadDialogOpen} />
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




function FileUploadDialog({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    const params = useParams() as { Id: string }
    const [createItemPicture] = useCreateItemPictureMutation()
    const [file, setFile] = useState<File>()



    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async () => {
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
            setIsOpen(false)
            enqueueSnackbar('Uploaded successfully', { variant: 'success' })
        }
    }



    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Upload Attachment</DialogTitle>
            <DialogBody>
                <Input type="file" onChange={handleFileChange} />
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="emerald" onClick={handleUpload}>Upload</Button>
            </DialogActions>
        </Dialog>
    )
}