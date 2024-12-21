import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as firebase from "firebase/app"
import { newitemUpdated, selectNewItemInfo } from '../newitem/newitemSlice'
import { Picture } from '../../components/Picture'
import './PicturesPage.css'
import { getIdFromWindow, getIdFromPath } from '../../functions'
import { useNavigate, Link } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { ActionButton } from '../../components/ActionButton'
import { EditPicture } from '../../components/EditPicture'



export const PicturesPage = props => {
    // const [pictures, setPictures] = useState([])
    const id = getIdFromPath(3)
    // const itemRef = useFirestore()
    //     .collection('items')
    //     .doc(id)
    // const item = useFirestoreDocData(itemRef)
    const item = {}
    const pictures = item.pictures || []
    const db = firebase.firestore()
    const storage = firebase.storage()


    const getDetailPath = () => {
        const path = window.location.pathname
        const pathsections = path.split("/")
        pathsections.pop()
        const prevPath = pathsections.join("/")
        return prevPath
    }


    const info = useSelector(selectNewItemInfo)
    const navigate = useNavigate()


    const savePictures = async () => {
        // db.collection("items")
        //     .doc(id)
        //     .set({ pictures }, { merge: true })
        //     .then(() => {    
        //         console.log("Finished upload of ", pictures)            
        //         // navigate(`/admin/items/${id}`)
        //     })
    }

    const uploadOneFile = async file => {
        // const storageRef = storage.ref().child(file.name)
        // return storageRef.put(file)
        //     .then(snapshot => snapshot.ref.getDownloadURL())
    }

    const uploadPicture = input => {
        // const fileinput = document.getElementById("file-input")
        // console.log(fileinput.files)
        // Object.values(fileinput.files).map(async file => {
        //     try {
        //         const picture = await uploadOneFile(file)
        //         console.log("the picture is ", picture)
        //         const newPictures = [...pictures, picture]
        //         itemRef.set({ pictures: newPictures }, { merge: true })
        //         .then(() => {    
        //             console.log("upload of ", pictures)            
        //             // navigate(`/admin/items/${id}`)
        //         })
        //         // setPictures([...pictures, picture])
        //     } catch(e) {
        //         console.log("Error captured: ", e)
        //     }
        // })
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        savePictures()
    }

    const renderPictures = () => pictures.map(picture => {
        return (
            <Picture picture={picture} key={picture} />
        )
    })

    return (
        <div className="pictures-complexity">
            <div className="heading">
                <PageTitle title="Pictures" />
                <Link to={getDetailPath()}>
                    Details
                </Link>
            </div>

            <form onSubmit={onSubmitForm}
                className="picture-form">
                <label htmlFor="file-input"
                    className="upload-label">
                    Upload
                </label>
                <input type="file"
                    multiple
                    id="file-input"
                    className="inputfile"
                    onChange={uploadPicture}
                />
            </form>


            <div className="newitempagepictures">
                <div className="picturelist">
                    {/* { renderPictures() } */}
                    <EditPicture picture="/ec1.jpeg" />
                    <EditPicture picture="/zuck.jpeg" />
                </div>
                <ActionButton
                    onClick={onSubmitForm}
                    title="save"
                />
            </div>
        </div>
    )
}