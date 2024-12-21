import React from 'react'
import './ItemListPage.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from './itemlistSlice'
import { Item } from '../../components/Item'
import { Loading } from '../../components/Loading'
import { useItemsQuery } from '../../components/admin/items/service'



export const ItemListPage = props => {
    const { data, error, isLoading } = useItemsQuery()



    

    if (error) {
        return (
            <div>
                {String(error)}
            </div>
        )
    }

    if (isLoading) {
        return <Loading />
    }


    return (
        <ItemList items={data} />
    )
}



export const ItemList = props => {
    /** @type {Item[]} */
    const items = props.items;

    

    const renderItemList = items.map(item => {
        return (
            <Item
                item={item}
                key={item.Id}
            />
        )
    })

 
 

    return (
        <div className="itemlist">
            {renderItemList}
        </div>
    )
}
