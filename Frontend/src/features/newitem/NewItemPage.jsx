import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from '../../components/Item.jsx'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import './NewItemPage.css'
import { useNavigate } from 'react-router-dom'
import { newitemUpdated } from './newitemSlice.js'
import { PageTitle } from '../../components/PageTitle.jsx'
import { ActionButton } from '../../components/ActionButton.jsx'



export const NewItemPage = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [specs, setSpecs] = useState("")
    const [description, setDescription] = useState("")
    const [pictureFiles, setPictureFiles] = useState([])
    const [pictures, setPictures] = useState([])
    const onNameChanged = e => setName(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)
    const onSpecsChanged = e => setSpecs(e.target.value)
    const onPriceChanged = e => setPrice(parseInt(e.target.value))
    const onDescriptionChanged = e => setDescription(e.target.value)
  
    const db = firebase.firestore()

    

    const readFiles = input => {
        const fileinput = document.getElementById("file-input")
        console.log(fileinput.files)
        const file = fileinput.files[0]
        const picture = window.URL.createObjectURL(file)
        const newPictures = [...pictures, picture]
        const newPictureFiles = [...pictureFiles, file]
        setPictureFiles(newPictureFiles)
        console.log(newPictures)
        setPictures(newPictures)
    }
    
    const onSubmitForm = e => {
        e.preventDefault()
    }

    const saveAndGoToPictures = async () => {
        const time = new Date().getTime()
        const timeString = time.toString()
        await db.collection("items")
            .doc(timeString)
            .set({
                id: timeString,
                createdAt: time,
                name, price, specs, description, category
            })
        navigate(`/admin/items/${timeString}/pictures`)
    }

    return (
        <div className="newitempage">
            <PageTitle title="Details" />
            <form onSubmit= {onSubmitForm}>
                <div className="label-input">             
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={onNameChanged}
                        />  
                </div>

                <div className="label-input">             
                    <label htmlFor="category">
                        Category
                    </label>
                    <input
                        id="category"
                        type="text"
                        value={category}
                        onChange={onCategoryChanged}
                        />  
                </div>

                <div className="label-input">             
                    <label htmlFor="specs">
                        Specs
                    </label>
                    <input
                        id="specs"
                        type="text"
                        value={specs}
                        onChange={onSpecsChanged}
                        />  
                </div>

                <div className="label-input">             
                    <label htmlFor="price">
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={onPriceChanged}
                        />  
                </div>

                <div className="label-input">             
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        rows="3"
                        value={description}
                        className="new-textarea"
                        onChange={onDescriptionChanged}
                        />  
                </div>
                <div className="label-input">
                    {/* <label htmlFor="picture">
                        Pictures
                    </label>
                    <input 
                        type="file"
                        id="picture"
                        /> */}

                    {/* <input type="file" name="file" id="file" class="inputfile" data-multiple-caption="{count} files selected" multiple />
                    <label for="file">Choose a file</label> */}

                    <ActionButton 
                        onClick={saveAndGoToPictures}
                        title="save"
                        />
                </div>
            </form>
        </div>
    )
}