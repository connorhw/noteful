import React from 'react';
import Note from '../Note/Note'
import '../NoteList/NoteList.css'
import store from '../store';

export default function NoteList(props) {
    //const { folders } = this.props
    return (
        <section className='NoteList'>
            <h3>Notes go here!</h3>
            <ul className='note-list'>
                {store.notes.map(note =>
                    <li key={note.id}>
                        <Note
                          id={note.id}
                          name={note.name}
                          //modified={note.modified}
                        />
                    </li>
                )}
            </ul>
        </section>
    )
}

NoteList.defaultProps = {
    notes: [],
}

