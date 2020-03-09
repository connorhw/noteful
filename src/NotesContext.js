import React from 'react';

const NotesContext = React.createContext({
    notes: [],
    folders: [],
    deleteNoteRequest: () => {},
})

export default NotesContext;