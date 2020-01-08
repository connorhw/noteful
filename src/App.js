import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FoldersListNav from './FoldersListNav/FoldersListNav'
import NoteListNav from './NoteListNav/NoteListNav'
import STORE from './store'
import './App.css'
import Note from './Note/Note'
import NotePageMain from './NotePageMain/NotePageMain';

const SearchFolderId = ({match, store}) => {
  const notes = store.notes.filter((note) => {
    return (match.params.folderId === note.folderId)
  })

  return (
    <section className='NoteListByFolder'>
      {console.log(notes)}
      <h3>Notes for folder: </h3>
      <ul className='note-list-by-folder'>
        {notes.map( note => 
          <li key={note.id}>
            <Note 
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
    </section>
  );
}

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
              {console.log(this.state.folders)}
              {console.log(this.state.notes)}
                <FoldersListNav folders={this.state.folders} />
                <NoteListNav notes={this.state.notes} />
              </>
              }
          />
          <Route 
            path='/folder/:folderId'
            render={routeProps => (
              <>
              <FoldersListNav store={STORE}/>
              <SearchFolderId 
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
              <FoldersListNav store={STORE}/>
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