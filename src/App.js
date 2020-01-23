import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'
import NotePageMain from './NotePageMain/NotePageMain'
import NotesInFolder from './NotesInFolder/NotesInFolder'
//import NotesContext from './NotesContext';

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

  render() {
    return (
      <main className='App'>
        <Link to={'/'}>
          <h1>Noteful</h1>
        </Link>
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
      </main>
    );
  }
}
//toLocaleString() --readable date method
export default App;