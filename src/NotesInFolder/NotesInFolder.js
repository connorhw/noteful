import React from 'react';
import '../NotesInFolder/NotesInFolder.css';
import Note from '../Note/Note'

export default function NotesInFolder({match, store}) {
    const notes = store.notes.filter((note) => {
        return (match.params.folderId === note.folderId)
    })
    
    return (
        <section className='NoteListByFolder'>
        <h3>Notes for folder: </h3>
        <ul className='note-list-by-folder'>
            {notes.map( note => 
            <li key={note.id}>
                <Note 
                id={note.id}
                name={note.name}
                modified={note.modified}
                />
            </li>
            )}
        </ul>
        </section>
    );
}


  