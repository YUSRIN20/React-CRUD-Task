import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';
import Edit from './Components/Edit';
import Create from './Components/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [id,SetId] = useState(0) // This id is variable id this id default value is 0
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/userDetails' element={<UserDetails SetId={SetId}/>}/>
        <Route path= '/edit/:id' element={<Edit id={id} />}/>
        <Route path= '/create' element={<Create />}/>
      </Routes>
      <div>
        <ToastContainer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;