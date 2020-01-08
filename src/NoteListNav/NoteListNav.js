import React from 'react';
import Note from '../Note/Note'
import '../NoteListNav/NoteListNav.css'


export default function NoteListNav(notes) {
    return (
        <section className='NoteListNav'>
            <h3>Notes go here!</h3>
            <ul className='note-list-nav'>
                {this.props.notes.map(note =>
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

