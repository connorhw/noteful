import React, { Component } from 'react'
import '../NotePageMain/NotePageMain.css'

class NotePageMain extends Component {
  render() {
    const selected = this.props.store.notes.find((note) => {
      return (this.props.match.params.noteId === note.id) 
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
}

export default NotePageMain;

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}