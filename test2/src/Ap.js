import React, { Component, Fragment, useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/home/navbar';
import Cart from './components/Cart/cart';
function Ap() { 
  const [open, setopen] = useState(false)
    const handleOpen = ()=>{
        setopen(true)
    }
    const handleclose =()=>{
        setopen(false)
    }
 

    return(
      <>
        <Home handleOpen={handleOpen} />
        <Cart open={open} handleOpen={handleOpen} handleclose={handleclose} />
        </>
    )
      
    
}

export default Ap;
