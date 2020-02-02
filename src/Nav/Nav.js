import React from 'react';
import { Link } from 'react-router-dom';
import FoldersListNav from '../FoldersListNav/FoldersListNav'

export default function Nav(props) {
    return (
        <nav className='Nav'>
            <Link to={'/'}>
                <h1>Noteful</h1>
            </Link>
            <FoldersListNav folders={props.folders} />
        </nav>
        
    );
}