import React, { Component, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { useRef } from 'react';

const Btn = props =>{
    return(
        <form onSubmit={props.onClick} >
        <div>
        <TextField
        id="amount"
        label="Amount" 
        defaultValue={0}
        type="number"
        size='small'
        style={{height:2, width:70, marginBottom:60 
       }}
       
      />
      </div>
        <Button type="submit"style={{backgroundColor:"#8a2b06", borderRadius:"100vh"}}  variant="contained" startIcon={<AddIcon />}>
            Add
      </Button>
      </form>
    )
}
export default Btn