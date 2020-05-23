import React, { Component } from 'react';
import '../AddFolder/AddFolder.css'

class AddFolder extends Component{
    handleSubmit(event) {
        event.preventDefault();
        // process form values here
      }
    render() {
        return (
            <form className='AddFolder-form' onSubmit={e => this.handleSubmit(e)}>
                <h2>New Folder</h2>
                <div className='form-group'>
                    <label htmlFor='new-folder-name'>Folder Name: </label>
                    <input type="text" name='new-folder-name' id='new-folder-name'/>
                </div>
                <div className='button-group'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default AddFolder;