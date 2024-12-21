import React, { useState } from 'react'
import { getIdFromPath } from '../../functions'
import classNames from 'classnames'
import * as firebase from "firebase/app"
import "firebase/firestore"
import './EditPage.css'
import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import { DetailForm } from '../../components/DetailForm'

export const EditPage = props => {
    const id = getIdFromPath(3)
    const picturePath = window.location.pathname + "/pictures"

    return (
        <div className="editpage">
            <div className="edit-heading">
                <PageTitle title="Edit" />
                <Link to={picturePath}>
                    Pictures
                </Link>
            </div>
           
            <DetailForm 
                />
        </div>
        
    )
}