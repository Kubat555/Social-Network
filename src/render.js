import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './redux/state';



 let RerenderTree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App dataState={state} addPost= {addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default RerenderTree;