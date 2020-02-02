import React, { Component } from 'react';
import '../NotesInFolder/NotesInFolder.css';
import Note from '../Note/Note'
import NotesContext from '../NotesContext'

class NotesInFolder extends Component {
    static contextType = NotesContext;
    render() {
        const filteredNotes = this.context.store.notes.filter((note) => {
            return (this.context.match.params.folderId === note.folderId)
        })
        
        return (
            <section className='NoteListByFolder'>
            <h3>Notes for folder: </h3>
            <ul className='note-list-by-folder'>
                {filteredNotes.map( note => 
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
}
export default NotesInFolder;

  