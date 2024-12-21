import React from 'react'
import './ItemListPage.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from './itemlistSlice'
import { Item } from '../../components/Item'
import { Loading } from '../../components/Loading'



export const ItemListPage = props => {
    const { itemlist, status } = useSelector(selectAllItems)
    
    const renderItemList = itemlist.map(item => {
        return (
            <Item
                item={item}
                key={item.id} 
                />
        )
    })

    if(status !== 'succeeded') {
        return <Loading />
    }


    return (
            <div className="itemlist">                
                {renderItemList}
            </div>
    )
}

