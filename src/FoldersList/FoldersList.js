import React from 'react';
//import Folder from '../Folder/Folder';
import '../FoldersList/FoldersList.css'
import Folder from '../Folder/Folder';
import store from '../store';

export default function FoldersList(props) {
    //const { folders } = this.props
    return (
        <section className='FoldersList'>
            <h3>folders here!</h3>
            <ul className='folders-list'>
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

FoldersList.defaultProps = {
    folders: [],
}