import { Menu } from '@mui/material';
import React, { Component, useEffect} from 'react';
import { useState } from 'react';
import Menudisplay from './menu';
import { useCallback } from 'react';
import { propsToClassKey } from '@mui/styles';

const Data = (props) =>{
    const [meals, setmeals] = useState([]);
    const [isloading , setIsloading]= useState(true)
    const [httperror, sethttperror] = useState(null)

        
 const fetchmeals= useCallback( async()=>{
       const request = await fetch('https://react-http-6ef21-default-rtdb.firebaseio.com/meals.json')
            if(!request.ok){
                throw new Error("something went wrang");
            }
         const responce = await request.json()  
        const loading =[] 
        for(const key in responce){
                loading.push({
                    id:key,
                    img:responce[key].imgSrc,
                    name:responce[key].name,
                    price:responce[key].price,
                    itemId:responce[key].itemId

                })   
            }
            setmeals(loading)
          
        }
          ,[] )
            

        
    useEffect(()=>{
        fetchmeals().catch(error=>
            {
                setIsloading(false);
                sethttperror(error.message)
            })

    },[fetchmeals])
        

        
   
    if(!isloading){
        return(
            <div>
                <p>loading...</p>
            </div>
        )

        
    
    }
     if(httperror){
        return<section>
            <p>{httperror}</p>
        </section>
     }
    const mealsloading = meals.map((meals)=>(
        <Menudisplay id={meals.id}
        img={meals.img}
        name={meals.name}
        price={meals.price}
        itemId={meals.itemId} 
        forworded= {props.onclick}/>
    ))
    
    return(
<div>
   {mealsloading}
</div>        
       

    )
}

export default Data