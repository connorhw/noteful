import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom'
import FoldersList from './FoldersList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FoldersList />
    </BrowserRouter>, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});
