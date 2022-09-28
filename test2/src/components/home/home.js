import React, { Component, Fragment } from 'react';
import Data from './data';
import Navbar from './navbar';
import Cart from '../Cart/cart';
import { propsToClassKey } from '@mui/styles';
const Home = (props)=>{
    return(
        <Fragment>
        <Navbar onclick={props.handleOpen} />
        <Data  />
        <Cart />
        </Fragment>
    )
}
export default Home