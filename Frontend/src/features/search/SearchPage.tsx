import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './SearchPage.css'
import cancel from '../../icons/cancel.svg'
import { Icon } from '../../components/Icon'
import { selectAllItems } from '../itemlist/itemlistSlice'
import { SearchItem } from '../../components/SearchItem'


export const SearchPage = props => {
    const dispatch = useDispatch()
    const itemlist = useSelector(selectAllItems)
    const [search, setSearch] = useState("")

    const searchItems = itemlist.filter(item => {
        return item.name.toLowerCase().includes(search)
            || item.description.toLowerCase().includes(search)
            || item.specs.toLowerCase().includes(search)
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
            <SearchItem item={item} key={item.id}/>
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