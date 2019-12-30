import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import FoldersList from './FoldersList/FoldersList'
import NoteList from './NoteList/NoteList'
import STORE from './store'
import './App.css'

class App extends Component {
  render() {
    return (
      
      <main className='App'>
        <h1>Noteful</h1>
        <div className='content'>
          <Route
            exact 
            path='/'
            render={() => 
              <>
              <FoldersList store={STORE}/>
              <NoteList store={STORE}/>
              </>
              }
          />
        </div>
      </main>
    );
  }
}

export default App;