import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './SearchPage.css'
import cancel from '../../icons/cancel.svg'
import { Icon } from '../../components/Icon'
import { SearchItem } from '../../components/SearchItem'
import { useItemsQuery } from '../../components/admin/items/service'


export const SearchPage = () => {
    const dispatch = useDispatch()
    const {data, error, isLoading } = useItemsQuery()
    const [search, setSearch] = useState("")

    if(isLoading) return (<div>Loading...</div>)
        if(error) return (<div>Error occurred {String(error)}</div>)

    const searchItems = data!.filter(item => {
        return JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
    })

    const onSearchChanged = e => setSearch(e.target.value.toLowerCase())
    
    const clearSearchbox = () => setSearch("")

    const renderSearchBox = () => {

        return (
            <div className="searchbox">
                <input 
                    className="searchbox-input"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={onSearchChanged}
                    />
                <button className="searchbox-cancel"
                    onClick={clearSearchbox}>
                    <Icon icon={cancel} />
                </button>
            </div>
        )
    }

    const renderSearchItems = () => searchItems.map(item => {

        return (
            <SearchItem item={item} key={item.Id}/>
        )
    })
        
        

 
    const renderNoItemFound = () => {
        if(!searchItems.length) {
            return (
                <div className="search-empty">
                    <p>Id item found!</p>
                </div>
            )
        }
    }

    return (
        <div className="searchpage">
            <h1 className="search-title">Search</h1>
            { renderSearchBox() }
            { renderNoItemFound() }
            <div className="search-items">
                { renderSearchItems() }
            </div>
        </div>
    )
}