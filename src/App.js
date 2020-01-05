import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'

/*
const filteredList = STORE.notes.filter(note => {
  console.log(note, this.props.match.params.folderId)
})
*/

const SearchFolderId = ({match}) => (
  <div>
    <h3>ID: {match.params.folderId}</h3>
    {/*filteredList*/}
  </div>
)

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
            path='/folder/:folderId'
            component={SearchFolderId}
          />
        </div>
      </main>
    );
  }
}

export default App;