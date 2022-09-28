import React, { Component, useState } from 'react';
  const Hookinput = props=>{
     const [enteredvalue, setInteredvalue] = useState('');
     const [istouched, setistouched] = useState(false);
     const valueIsvalid = validateValue(enteredvalue);
     const hasError = !valueIsvalid && istouched;

    
    const homeInputchangehandeler = (event)=>{
        setInteredvalue(event.target.value)
    }
    const inputBlurHandeler = (event)=>{
        setistouched(true)
    }
     return{
        value :enteredvalue,
        hasError:hasError,
        homeInputchangehandeler,
        inputBlurHandeler,
     }
  }


  export default Hookinput