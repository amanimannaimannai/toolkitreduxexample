import { Height, Scale, Translate } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { createTheme, display, fontSize, maxHeight } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";

export const useStyles = makeStyles(() => ({
   logo:{
    width:"50px",
    Maxheight:"50px",
    borderRadius:"100vh"
   },
   search:{
    position:"relative",
    borderRadius:"50px",
    backgroundColor:'#3D0000',
    '&:hover':{
        backgroundColor:"#845460"
    },
    height:"50px",
    width:"150px",
    display: 'flex',
    justifyContent: 'space-between',

   },
   p:{
    position:"absolute",
    top:"10px",
    left:'45px'

   },
   bgr:{
    borderRadius:"100vh",
    backgroundColor:"#000000",
    maxheight:"30px",
    maxwidth:'30px'
   },
   padge:{
    position:"absolute",
    top:"10px",
    right:"17px"


   },
   wrapper:{
    padding:"spacing(0,2)",
    height:"100%",
    position:"absolute",
    alignItems:"center",
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',

    
},
list:{
    display: 'flex',
    justifycontent: 'space-between',
    margin: '1rem',
    paddingbottom: '1rem',
    borderBottom:'1px solid #ccc',
    width: '100%', 
    maxWidth: 560,
},
icon:{
    position:"absolute",
    top:"10px",
    right:'50px'
},
span:{
    color:"#FD841F"
}

}));


 