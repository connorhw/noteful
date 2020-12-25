import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NoteListNav from './NoteListNav/NoteListNav'
import './App.css'
import NotePageMain from './NotePageMain/NotePageMain'
import NotesInFolder from './NotesInFolder/NotesInFolder'
import Nav from './Nav/Nav'
import NotesContext from './NotesContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NotesError from './ErrorBoundaries/NotesError';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes:[],
        folders:[],
    }
  } 
  
  componentDidMount() {
    const folderUrl = 'http://localhost:8000/api/folders'
    fetch(folderUrl, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error(response.status)
        }
        const res = response.json()
        console.log(res)
        return res;
      })
      .then(res => {
        this.setState({
          folders: res
        })
      })

    const noteUrl = 'http://localhost:8000/api/notes'
    fetch(noteUrl, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error(response.status)
        }
        const res = response.json()
        //console.log(res)
        return res;
      })
      .then(res => {
        this.setState({
          notes: res
        })
      })

  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(n =>
      n.id !== noteId
    )
    this.setState({
      notes: newNotes

    })
  }

  addNewFolder = folderName => {
    this.setState({
      folders: [...this.state.folders, folderName]
    })
  }

  addNewNote = noteName => {
    this.setState({
      notes: [...this.state.notes, noteName]
    })
  }

  render() {
    //console.log(this.state.folders)
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNoteRequest: this.deleteNote,
      //addNote: this.addNote
    }
    return (
      <main className='App'>
        <NotesContext.Provider value={contextValue}>
          <Nav folders={this.state.folders}/>
          <div className='content'>
            <Route
              exact 
              path='/'
              component={NoteListNav}
            />
            <NotesError>
              <Route
                path='/notes/:noteId'
                component={NotePageMain}
              />
              <Route
                path='/addNote'
                render={() => {
                  return <AddNote folders={this.state.folders} handleAdd = {this.addNewNote}/>
                }}
              />
            </NotesError>
            <Route 
              path='/folder/:folderId'
              component={NotesInFolder}
            />
            <Route
              path='/addFolder'
              render={() => {
                return <AddFolder handleAdd = {this.addNewFolder}/>
              }}
            />

          </div>
        </NotesContext.Provider>
      </main>
    );
  }
}
//toLocaleString() --readable date method
export default App;