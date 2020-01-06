import React from 'react'
//import Note from '../Note/Note'

export default function NotePageMain(props) {
    return (
        <section className='NotePageMain'>
            {console.log(props.note)}
        </section>
    );
}

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}