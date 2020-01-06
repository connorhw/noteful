import React from 'react';
import Note from '../Note/Note'
import '../NoteListNav/NoteListNav.css'
import store from '../store';

export default function NoteListNav(props) {
    //const { folders } = this.props
    return (
        <section className='NoteListNav'>
            <h3>Notes go here!</h3>
            <ul className='note-list-nav'>
                {store.notes.map(note =>
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
    )
}

NoteListNav.defaultProps = {
    notes: [],
}

