import React from 'react';
//import Folder from '../Folder/Folder';
import '../FoldersListNav/FoldersListNav.css'
import Folder from '../Folder/Folder';
import store from '../store';

export default function FoldersListNav(props) {
    //const { folders } = this.props
    return (
        <section className='FoldersListNav'>
            <h3>folders here!</h3>
            <ul className='folders-list-nav'>
                {store.folders.map(folder =>
                <li key={folder.id}>
                    <Folder
                    id={folder.id}
                    name={folder.name}
                    />
                </li>
                )}
            </ul>
        </section>
    )
}

FoldersListNav.defaultProps = {
    folders: [],
}