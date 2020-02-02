import React, { Component } from 'react';
import Note from '../Note/Note'
import '../NoteListNav/NoteListNav.css'


class NoteListNav extends Component {
    render() {
        return (
            <section className='NoteListNav'>
                <h3>All Notes!</h3>
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
}

export default NoteListNav;

NoteListNav.defaultProps = {
    notes: [],
}

