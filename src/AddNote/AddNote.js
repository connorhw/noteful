import React, { Component } from 'react';
import '../AddNote/AddNote.css'
import PropTypes from 'prop-types'

class AddNote extends Component {
    state = {
        error: ''
    }

    handleSubmit(event) {
        event.preventDefault();
        const noteName = event.target.noteName.value;
        const noteContent = event.target.noteContent.value;
        const noteFolder = event.target.noteFolder.value;
        
        let newFolder = this.props.folders.find((folder) => {
            return folder.folder_name === noteFolder;
        })
        
        const url = 'https://pacific-springs-50434.herokuapp.com/api/notes';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "title": noteName,
                "content": noteContent,
                "folder_id": newFolder.id,
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
                this.setState({
                    error: ''
                 }, () => {
                   this.props.handleAdd(data)
                 })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    render() {

        let folderList = this.props.folders;
        let optionItems = folderList.map((item) => 
            <option key={item.id}>{item.folder_name}</option>
        );
        return (
            <form className='addNote-form' onSubmit={e => this.handleSubmit(e)}>
                <h3>New Note</h3>
                <div className='form-group-name'>
                    <label>Name of Note: </label>
                    <input type="text" name='noteName' id='noteName' required/>
                </div>
                <br />
                <div className='form-group-content'>
                    <label>Content: </label>
                    <textarea name='noteContent' id ='noteContent' type='text' cols="40" rows="5" required /><br />
                </div>
                <br />
                <div className='form-group-folder'> 
                    <label>Choose a folder to put this in: </label>
                    <select name='noteFolder' id='noteFolder' required>
                        {optionItems}
                    </select>
                </div>
                <button type='submit'>Submit</button>
                {
                    this.state.error && <div id="errors-here">{this.state.error}</div>
                }
            </form>
        )
    }
}

export default AddNote;

AddNote.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.object),
    handleAdd: PropTypes.func
}