// admin/items

import React from 'react'
import './ManageItems.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from '../../itemlist/itemlistSlice'
import { Item } from '../../../components/Item'
import { useNavigate, Link } from 'react-router-dom'


export const ManageItems = props => {
    const navigate = useNavigate()


    const { itemlist, status } = useSelector(selectAllItems)  
   
    
    const renderItemList = itemlist.map(item => {
        return (
            <Item
                item={item}
                key={item.id} 
                />
        )
    })

    const goToNewItem = () => navigate("/admin/new")

    const getDateString = () => new Date().getTime().toString()
    
    return (
        <div>
            manage
            <div class="itemlist">                
                {renderItemList}
            </div>
        </div>
    )
}