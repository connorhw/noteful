import React, { Component } from 'react';
import '../AddFolder/AddFolder.css';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    state = {
        error: ''
    }

    handleSubmit(event) {
        event.preventDefault();
        const folderName = event.target.folderName.value;
        console.log('New Folder Name: ', folderName);
        
        const url = 'https://frozen-escarpment-68883.herokuapp.com/api/folders';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "folder_name": folderName
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
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    render() {
        return (
            <form className='AddFolder-form' onSubmit={e => this.handleSubmit(e)}>
                <h3>New Folder</h3>
                <div className='form-group'>
                    <label htmlFor='new-folder-name'>Folder Name: </label>
                    <input type="text" name='folderName' id='folderNname' required/>
                </div>
                <div className='button-group'>
                    <button type='submit'>Submit</button>
                </div>
                {
                    this.state.error && <div id="errors-here">{this.state.error}</div>
                }
            </form>
        )
    }
}

export default AddFolder;

AddFolder.propTypes = {
    handleAdd: PropTypes.func
}