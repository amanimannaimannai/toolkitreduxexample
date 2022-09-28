import React, { Component } from 'react';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import cartReducer from '../features/Cart/cartSlice';
const store = configureStore({
    reducer:{
        cart:cartReducer

    }
})
export default store
