import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const Cart = (props) => {
  return (
    <>
      <Modal
        style={{ margin: "auto", marginTop: "167px", marginLeft: "450px" }}
        open={props.open}
        onClose={props.handleclose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: 500,
            height: 500,
          }}
        >
          <Card sx={{ minWidth: 175 }}>
            <CardContent>
              <section
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                }}
              >
                <Typography sx={{ fontSize: 14 }} color="#000000" gutterBottom>
                  Total Amount :
                </Typography>
                <span style={{ border: "1 solid" }}>45:00</span>
              </section>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={""}
                style={{ backgroundColor: "#8a2b06", borderRadius: "100vh" }}
                size="small"
              >
                Order
              </Button>
              <Button
                variant="outlined"
                onClick={props.handleclose}
                style={{ borderRadius: "100vh", border: "1 solid #8a2b06 " }}
                size="small"
              >
                closed
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  );
};
export default Cart;
