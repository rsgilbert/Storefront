import React from 'react'
import './Search.css'
import { selectSearch, searchUpdated } from '../features/search/searchSlice'
import { useSelector, useDispatch } from 'react-redux'


export const Search = () => {
    const search = useSelector<any,string>(selectSearch)
    const dispatch = useDispatch()

    const onSearchChanged = e =>
        dispatch(searchUpdated({ search: e.target.value }))
    
    return (
        <div className="search">
            <div className="search-input">
                <input 
                    placeholder="Search"
                    onChange={onSearchChanged}
                    value={search}/>
            </div>          

            <div className="search-image">
                <img
                    src="/search.png"
                    />
            </div>            
        </div>
            
    )
}