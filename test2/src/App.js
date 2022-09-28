import React, { Component, Fragment, useCallback, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Addmovie from './components/addmovie';
import Movies from './components/Movies';

function App() { 
  const [movies,setMovies]= useState([])
  const [isloading, setIsloading] = useState(false)
  const [error, setError] = useState(null)
 
  const fetchMovies = useCallback(async function(){
    setIsloading(true)
    setError(null)
    try{
    
    const responce = await  fetch("https://react-http-6ef21-default-rtdb.firebaseio.com/movies.json")
    console.log(responce)
    const rest = await responce.json()
    const loading = [];
    for(const key in rest){
      loading.push({
        id:key,
        title:rest[key].title
      })
    }
    console.log(loading)
    setMovies(loading)  
    if(!responce.ok){
      throw new Error('something went wrong')
    }
    }catch(error){
  setError(error.message)
 }
 setIsloading(false)
 

  },[])
  useEffect(()=>{
    fetchMovies()

  },[fetchMovies])
  async function handleadd(movie){
    const responce = await fetch("https://react-http-6ef21-default-rtdb.firebaseio.com/movies.json",{
      method:"POST",
      body:JSON.stringify(movie),
      headers:{
        'Content-type':'application/json'
      }
    })
    const data = responce.json();
    console.log(data)

  }

    return(
      <Fragment>
       
        <section>
         <Addmovie onaddmovie={handleadd} />
         <section>
          <button onClick={fetchMovies}>fetch</button>
         </section>
         <section>
          {!isloading && <Movies movies ={movies} />}
          {isloading &&<p>is looding ...</p>}
          </section>
        </section>
      </Fragment>
    )
      
    
}

export default App;
