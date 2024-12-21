import React from 'react'
import deleteicon  from '../icons/delete.svg'
import editicon from '../icons/edit.svg'
import { Picture } from './Picture'
import {Icon } from './Icon'

import './EditPicture.css';

export const EditPicture = props => {
    

    return (
        <div>
            <Picture picture={props.picture} />
            <div className="editpicture-actions icon-button">
                <button onClick={props.onEdit} className="icon-button">
                    <Icon icon={editicon} />
                </button>
                <button onClick={props.onDelete}
                    className="icon-button">
                    <Icon icon={deleteicon} />
                </button>
            </div>
        </div>
    )
}