import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'

class App extends Component {
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
              <FoldersListNav store={STORE}/>
              <NoteListNav store={STORE}/>
              </>
              }
          />
          <Route 
            path='/folder/folderId'
            folderId={folderId}
            render={
              
            }
          />
        </div>
      </main>
    );
  }
}

export default App;