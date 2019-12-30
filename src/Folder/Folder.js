import React from 'react';
import {Link} from 'react-router-dom'
import '../Folder/Folder.css'

export default function Folder(props) {
    return (
        <div className='Folder'>
            <Link to={`/folder/${props.id}`}>
              {props.name}
            </Link>
        </div>
    )
}
