import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


import Update from './Update';
import Read from './Read';
import Create from './Create';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        
        <Footer />

        <Routes>
          <Route path="/" element={<Create />}/>
          <Route path="/update-note/:id" element={<Update />}/>
          <Route path="/read-note" element={<Read />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
