import React from 'react'
import {Link} from 'react-router-dom'
import '../Note/Note.css'

export default function Note(props) {
    return (
        <div className='Note'>
            <Link to={`/note/${props.id}`}>
              <p>{props.name}</p>
              {props.modified}
            </Link>
            
        </div>
    );
}