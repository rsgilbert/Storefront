import React from 'react'
import './AdminPage.css'
import { useNavigate, Link } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { ActionButton } from '../../components/ActionButton'



export const AdminPage = props => {
    const navigate = useNavigate()



    // if(status !== 'succeeded') {
    //     return <Loading />
    // }

    return (
        <div>
             <div className="admin-heading">
                <PageTitle title="Admin" />
                <Link to={ `/admin/items/` } 
                    className="new-link">
                    <ActionButton title="New" className="action-new"/>
                </Link>
            </div>
       
        </div>
    )
}