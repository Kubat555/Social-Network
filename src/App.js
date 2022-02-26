import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import Messages from './components/masseges/masseges';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <div className='App-content'>
          <Routes>
            <Route path='/profile' element={<Content posts = {props.dataState.posts} dispatch={props.dispatch} />}/>
            <Route path='/messages/*' element={<Messages dialogs={props.dataState.dialogs} dispatch={props.dispatch} />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
