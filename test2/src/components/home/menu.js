import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useStyles } from "../styled";
import { useDispatch } from "react-redux";
import { additemtocart } from "../../features/Cart/cartSlice";
// import CartContext from "../../Store/cart-context";
import Btn from "./button";
import Data from "./data";
const Menudisplay = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const theme = useTheme();
  const Img = styled("img")({
    margin: "auto",
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
    marginLeft: "150px",
  });

  

  return (
    <Card
      sx={{ display: "flex", width: 800, margin: "auto", marginTop: "9px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            direction: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                alignItem: "center",
                display: "flex",
                justifyItems: "center",
              }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                alignItem: "center",
                display: "flex",
                justifyItems: "center",
              }}
            >
              {props.itemId}
            </Typography>
            <span className={classes.span}> ${props.price}</span>
          </Grid>

          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={props.img} />
            </ButtonBase>
          </Grid>
          <Grid item sx={{ marginLeft: "290px" }}>
            <Btn onClick={()=>{dispatch(additemtocart({id:props.id}))}}  />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
export default Menudisplay;
