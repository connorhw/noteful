import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
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

  setNotes(notes) {
    this.setState({notes});
  }

  setFolders(folders) {
    this.setState({folders});
  }

  componentDidMount() {
    this.setNotes(STORE.notes);
    this.setFolders(STORE.folders);
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
          <Nav />
          <div className='content'>
            <Route
              exact 
              path='/'
              render={() => 
                <>
                  <FoldersListNav folders={this.state.folders} />
                  <NoteListNav notes={this.state.notes} />
                </>
                }
            />
            <Route 
              path='/folder/:folderId'
              render={routeProps => (
                <>
                <FoldersListNav folders={this.state.folders} />
                <NotesInFolder 
                  store={STORE}
                  {...routeProps}
                />
                </>
              )}
            />
            <Route
              path='/note/:noteId'
              render={routeProps => (
                <>
                <FoldersListNav folders={this.state.folders} />
                <NotePageMain 
                  store={STORE}
                  {...routeProps}
                />
                </>
              )}
            />
          </div>
        </NotesContext.Provider>
      </main>
    );
  }
}
//toLocaleString() --readable date method
export default App;