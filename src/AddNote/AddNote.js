import React, { Component } from 'react';
import '../AddNote/AddNote.css'

class AddNote extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const noteName = event.target.noteName.value;
        const noteContent = event.target.noteContent.value;
        const noteFolder = event.target.noteFolder.value;
        const url = 'http://localhost:9090/notes';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "name": noteName,
                "content": noteContent,
                "folderId": noteFolder
            }),
            headers: {
                'content-type':'application/json',
            },
        }
        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong with your note POST fetch')
                }
                return res.json()
            })
            .then((data) => {
                this.props.handleAdd(data);
            })
    }

    render() {

        console.log(this.props.folders)
        
        let folderList = this.props.folders;
        let optionItems = folderList.map((item) => 
            <option key={item.id}>{item.name}</option>
        );
        

        
        return (
            <form className='addNote-form' onSubmit={e => this.handleSubmit(e)}>
                <h2>New Note</h2>
                <div className='form-group-name'>
                    <label>Name of Note: </label>
                    <input name='noteName' id='noteContent' required/>
                </div>
                <br />
                <div className='form-group-content'>
                    <label>Content: </label>
                    <textarea name='noteContent' type='text' cols="40" rows="5" required /><br />
                </div>
                <br />
                <div className='form-group-folder'> 
                    <label>Choose a folder to put this in: </label>
                    <select name='noteFolder' id='noteFolder'>
                        {optionItems}
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default AddNote;