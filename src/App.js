import './App.css';
import {Route, Routes} from 'react-router-dom'

import Home from './pages/home';

import About from './pages/about';

import Post from './pages/post';

import Userlist from './pages/details';

import Post_api from './pages/post_api';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about/:un' element={<About/>} />
        <Route path='/users/:username' element={<Userlist/>} />
        <Route path='/post' element={<Post/>} />
        </Routes> */}
        
        <Post_api />
    </div>
  );
}
export default App;
