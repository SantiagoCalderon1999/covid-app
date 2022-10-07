import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableModel({columnTitles, rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           {columnTitles.map((columnTitle)=>(<TableCell align="left">{columnTitle}</TableCell>))} 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" >{row.country}</TableCell>
              <TableCell align="left">{row.cases}</TableCell>
              <TableCell align="left">{row.recovered}</TableCell>
              <TableCell align="left">{row.deaths}</TableCell>
              <TableCell align="left">{row.detail}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableModel;