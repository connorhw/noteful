import React from 'react';
import ReactDOM from 'react-dom';
import FoldersList from './FoldersList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoldersList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
