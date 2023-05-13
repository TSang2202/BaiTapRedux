import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {configureStore} from '@reduxjs/toolkit'
import { Provider, createStoreHook } from 'react-redux'
import { createStore} from 'redux'

import Main from './Main'


const defaultState = {
    arrData: [
      {id: 1, title: 'To do 1', description: 'This is to do 1', time: "22/2/2023", done: true },
      {id: 2, title: 'To do 2', description: 'This is to do 2', time: "22/2/2023", done: true },
      {id: 3, title: 'To do 3', description: 'This is to do 3', time: "22/2/2023", done: false },
      {id: 4, title: 'To do 4', description: 'This is to do 4', time: "22/2/2023", done: true },
      {id: 5, title: 'To do 5', description: 'This is to do 5', time: "22/2/2023", done: false },

    ], 
    test: "TEST"
  }


export default class Layout extends Component{

    render(){
        return(
           <Provider store={store}>


                <Main/>

           </Provider>
        )
    }
}

const reducer = (state = defaultState, action) =>{
    return state;
  }

const store = createStore(reducer)