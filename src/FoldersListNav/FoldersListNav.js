import React, { Component } from 'react';
import '../FoldersListNav/FoldersListNav.css'
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class  FoldersListNav extends Component{
    render() {
        //console.log(this.props.folders)
        return (
            <section className='FoldersListNav'>
                <h2>Folders!</h2>
                <ul className='folders-list-nav'>
                    {this.props.folders.map(folder =>
                    <li key={folder.id}>
                        <Folder
                        id={folder.id}
                        name={folder.name}
                        />
                    </li>
                    )}
                </ul>
                <Link to={'/addFolder'}>+New Folder</Link>
            </section>
        )
    }
}

export default FoldersListNav;

FoldersListNav.defaultProps = {
    folders: [],
}

FoldersListNav.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.object)
}
