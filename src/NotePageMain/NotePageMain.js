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
    const noteUrl = `https://pacific-springs-50434.herokuapp.com/api/notes/${noteId}`
    fetch(noteUrl, {
      method: 'DELETE',
    })
    .then(() => {
      this.props.history.push('/')
      this.context.deleteNoteRequest(noteId)
    })
  }

  render() {
    //console.log(this.context.notes)
    //console.log(this.props)
    //console.log(note.id)
    const selected = this.context.notes.find(note => {
      //console.log(this.props.match.params)
      //console.log(note)
      return (this.props.match.params.noteId === note.id) 
    })
    
    return (
        <div>
          {/*console.log(selected)*/}
          <section className='NotePageMain'>
              <h2>{selected.title}</h2>
              <div>{selected.date_published}</div>
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