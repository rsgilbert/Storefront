import { useNavigate } from "react-router-dom"

export default function ItemsCommandBar() {
     const navigate = useNavigate()

    async function handleNew() {
        navigate('new')
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <button onClick={handleNew}>
                        New
                    </button>
                </li>
            </ul>
        </div>
    )
}