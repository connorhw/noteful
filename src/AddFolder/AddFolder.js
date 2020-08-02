import React, { Component } from 'react';
import '../AddFolder/AddFolder.css';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    handleSubmit(event) {
        event.preventDefault();
        // process form values here
        //console.log(this.props.folders)
        const folderName = event.target.folderName.value;
        console.log('New Folder Name: ', folderName);
        
        const url = 'http://localhost:9090/folders';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "name": folderName
            }),
            headers: {
                'content-type':'application/json',
            },

        }
        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong! Try again...')
                }
                return res.json()
            })
            .then((data) => {
                this.props.handleAdd(data);
            })
    }

    render() {
        return (
            <form className='AddFolder-form' onSubmit={e => this.handleSubmit(e)}>
                <h2>New Folder</h2>
                <div className='form-group'>
                    <label htmlFor='new-folder-name'>Folder Name: </label>
                    <input type="text" name='folderName' id='folderNname' required/>
                </div>
                <div className='button-group'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default AddFolder;

AddFolder.propTypes = {
    handleAdd: PropTypes.func
}