import React from 'react'
import './ItemListPage.css'
import { Item } from './Item'
import { Loading } from './Loading'
import { useItemsQuery } from './admin/items/service'



export const ItemListPage = () => {
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
        <ItemList items={data!} />
    )
}


interface ItemListProps {
    items: Item[]
}

export const ItemList = (props: ItemListProps) => {
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
