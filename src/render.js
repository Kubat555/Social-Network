import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';



 let RerenderTree = (state)=>{

  ReactDOM.render(
    <React.StrictMode>
      <App dataState={state} dispatch= {store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root') 

  );
}

export default RerenderTree;