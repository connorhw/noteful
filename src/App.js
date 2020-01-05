import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'
import Note from './Note/Note'

const SearchFolderId = ({match, store}) => {
  const notes = store.notes.filter((note) => {
    return (match.params.folderId === note.folderId)
  });

  return (
    <div>
      <h3>ID: {match.params.folderId}</h3>

      {notes.map((note) => {
        return <Note declare some props here />
      })}
    </div>
  );
}

/*
const SearchFolderId = ({match}) => {
  console.log(match.params.folderId);

  return (
    <div>
      <h3>ID: {match.params.folderId}</h3>
    </div>
  );
}
*/
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
            //component={SearchFolderId}
            render={() => 
            <SearchFolderId 
              store={STORE}
              />
            }
          />
        </div>
      </main>
    );
  }
}

export default App;