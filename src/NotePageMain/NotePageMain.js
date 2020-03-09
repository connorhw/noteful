import React, { Component } from 'react'
import '../NotePageMain/NotePageMain.css'
import NotesContext from '../NotesContext'

/*
function deleteNoteRequest() {
  const noteUrl = 'http://localhost:9090/notes'
  fetch(noteUrl, {
    method: 'DELETE',
  })
    //.then()
    //.then()
}
*/

class NotePageMain extends Component {
  static contextType = NotesContext;
  deleteNote = (noteId) => {
    const noteUrl = `http://localhost:9090/notes/${noteId}`
    fetch(noteUrl, {
      method: 'DELETE',
    })
    .then(() => {
      this.props.history.push('/')
      this.context.deleteNoteRequest(noteId)
    })

    
  }

  render() {
    const selected = this.context.notes.find((note) => {
      return (this.props.match.params.noteId === note.id) 
    })
    return (
        <div>
          <section className='NotePageMain'>
            {console.log(selected)}
              <h2>{selected.name}</h2>
              <div>{selected.modified}</div>
              <p>{selected.content}</p>
          </section>
          <button onClick={() => this.deleteNote(selected.id)}>Delete</button>
        </div>
    );
  }
}

export default NotePageMain;

NotePageMain.defaultProps = {
    note: {
      content: '',
    }
}