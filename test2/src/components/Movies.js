import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Movie= props =>{
    return (
        <div>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, background:"#0F3460"}} aria-label="simple table">
        <TableHead>
          <TableRow sx ={{color:"white" }}>
            <TableCell sx ={{color:"white" }}>Movie</TableCell>
            <TableCell sx ={{color:"white" }} align="right">id</TableCell>
            <TableCell sx ={{color:"white" }} align="right">title</TableCell>   
          </TableRow>
        </TableHead>
        <TableBody>
          {props.movies.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"  sx ={{color:"white" }}>{row.id}</TableCell>
              <TableCell align="right" sx ={{color:"white" }}>{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default Movie
