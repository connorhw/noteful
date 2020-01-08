import React from 'react'

export default function NotePageMain({match, store}) {
    //const SelectedNote = ({match, store}) => {
      const selected = store.notes.find((note) => {
        console.log(typeof match.params.noteId, typeof note.id);
        return (match.params.noteId === note.id) 
      })
      
    return (
        <section className='NotePageMain'>
           {console.log(selected)}
        </section>
    );
}

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}