import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './pages/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import About from './pages/About';

import Update from './pages/Update';
import Project from './pages/Project';



const App=() => {
    const baseURL ='http://localhost:8081/Admin'
    const[post,setPost] = useState([]);
    useEffect(() =>{
      axios.get(baseURL).then((response)=>
        setPost(response.data));
      

      });

      if(!post) return null;

  return (<>
   <div>
      <Navbar/>
    </div>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Admin' element={<Admin post={post}/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
         <Route exact path="/Update/:id" element={<Update/>}></Route> 

         <Route exact path='/Project' element={<Project/>}></Route>
      </Routes>
      </div>

      </>
    )
}


export default App;
