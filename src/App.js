import React, { Component } from 'react';
import { Route } from 'react-router-dom'
//import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'
import NotePageMain from './NotePageMain/NotePageMain'
import NotesInFolder from './NotesInFolder/NotesInFolder'
import Nav from './Nav/Nav'
import NotesContext from './NotesContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes:[],
        folders:[],
    }
  } 
/*
  setNotes(notes) {
    this.setState({notes});
  }

  setFolders(folders) {
    this.setState({folders});
  }
*/
  componentDidMount() {
    /*
    const url = 'http://localhost:9090/folders'
    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
    */
   
    this.setState(STORE.notes);
    this.setState(STORE.folders);
    

  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(n =>
      n.id !== noteId
    )
    this.setState({
      notes: newNotes

    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
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
            <Route 
              path='/folder/:folderId'
              component={NotesInFolder}
            />
            <Route
              path='/note/:noteId'
              component={NotePageMain}
            />
          </div>
        </NotesContext.Provider>
      </main>
    );
  }
}
//toLocaleString() --readable date method
export default App;