import React, { Component } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import { useStyles } from '../styled';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import logo from '../images/images.png'
// import { AddShoppingCart } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = props =>{
    const classes = useStyles()
    
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"#8a2b06"}} position="static">
        <Toolbar  sx={{display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between"}} >
            <img src={logo}  className={classes.logo} />
            <div className={classes.search}>
            <div className={classes.Wrapper}>
            </div>
            <Badge badgeContent={2} color="primary" className={classes.icon}>
            <ShoppingCartIcon />
            </Badge>
            <Typography onClick={props.onclick} variant='p' className={classes.p} >your cart</Typography>
            <div className={classes.bgr}>
            </div>

            </div>
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default Navbar