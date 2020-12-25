import React from 'react'
import {Link} from 'react-router-dom'
import '../Note/Note.css'

export default function Note(props) {
    return (
        <div className='Note'>
            <Link to={`/notes/${props.id}`}>
              <p>{props.title}</p>
              {props.date_published}
            </Link>
        </div>
    );
}