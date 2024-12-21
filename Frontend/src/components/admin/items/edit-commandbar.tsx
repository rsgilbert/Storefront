import { useNavigate, useParams } from "react-router-dom"
import { useDeleteItemMutation } from "./service"
import { Link } from "../../catalyst/link"


export default function EditItemCommandBar() {
    const params = useParams() as { Id: string }
    const [deleteItem] = useDeleteItemMutation()
    const navigate = useNavigate()

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
                    <button onClick={handleDelete}>
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