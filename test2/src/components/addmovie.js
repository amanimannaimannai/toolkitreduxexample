import React, {useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useStyles } from './styled';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Grid, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Hookinput from '../hooks/hook-input';

 const Addmovie = props =>{
    const classes = useStyles()
    const titleRef = useRef('')
    const reference= useRef('')
    const [isnotvalid,setIsnotvalid]= useState(false)
    const validity = isnotvalid? 'error':"";
    const blurhandling=()=>{
        if(titleRef.current.value.trim()===""){
            setIsnotvalid(true)
         }
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        setIsnotvalid(false)
        const movie = {
        title :titleRef.current.value,
        reference:reference.current.value
        }
        if(movie.title.trim()===""){
            setIsnotvalid(true)
         }
        else{
            props.onaddmovie(movie)

            
        }

    }
    return(
        <div>
        <Card className= {classes.card}>
        <CardContent>
        <form onSubmit={handlesubmit}>
        <Grid container spacing={1} >
        <Grid xs={12} sm={6} item>
        <TextField fullWidth label="firstName" id="fullWidth"  error={isnotvalid} className={classes.error} onBlur={blurhandling}  inputRef={titleRef} />
        </Grid>
        <Grid xs={12} sm={6} item>
        <TextField type='email' fullWidth label="LastName"  id="fullWidth" inputRef={reference} />
        </Grid>
        <Grid xs={12} sm={12} item>
        <TextField fullWidth label="Graduation" id="fullWidth" />
        </Grid>
        <Grid>
        

        </Grid>
        <Grid xs={12} sm={12} item>
        <Button variant='contained'  type="submit" style={{backgroundColor:"#E80F88"}} fullWidth className={classes.subButton} > Submit </Button>
        </Grid>
        </Grid>
        </form>
        </CardContent>
        </Card>
        </div>
    )
 }
 export default Addmovie