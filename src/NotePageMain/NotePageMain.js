import React from 'react'
import Note from '../Note/Note'

export default function NotePageMain(props) {
    return (
        <section className='NotePageMain'>
            <Note />
        </section>
    );
}

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}