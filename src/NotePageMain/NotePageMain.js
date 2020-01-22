import React from 'react'
import '../NotePageMain/NotePageMain.css'

export default function NotePageMain({match, store}) {
      const selected = store.notes.find((note) => {
        return (match.params.noteId === note.id) 
      })

    return (
        <section className='NotePageMain'>
           {console.log(selected)}
            <h2>{selected.name}</h2>
            <div>{selected.modified}</div>
            <p>{selected.content}</p>
        </section>
    );
}

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}