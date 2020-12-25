import React, { Component } from 'react';
import Note from '../Note/Note'
import '../NoteListNav/NoteListNav.css'
import NotesContext from '../NotesContext'
import { Link } from 'react-router-dom';

class NoteListNav extends Component {
    static contextType = NotesContext;
    render() {
        return (
            <section className='NoteListNav'>
                <Link to='/AddNote'>+New Note</Link>
                <h2>All Notes!</h2>
                <ul className='note-list-nav'>
                    {this.context.notes.map(note =>
                        <li key={note.id}>
                            <Note
                            id={note.id}
                            title={note.title}
                            date_published={note.date_published}
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

