import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableModel.css";
import CountryModal from "./CountryModal";
import { Box, Grid } from "@mui/material";
import LinearProgressCondition from "./LinearProgressCondition";

/**
 * Creates a table with all the information of a country
 * @returns JSX with all the tags related to the table
 */
function TableModel({ columnTitles, rows }) {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const onClosing = () => {
    setOpen(false);
  };
  const selectRow = (countrySlug) => {
    setSelectedCountry(countrySlug);
    setOpen(true);
  };
  if (rows.length <= 1 && rows[0].country === "") {
    rows = [];
  }
  return (
    <Grid container direction="column" alignItems="center">
      <Box>
        <TableContainer component={Paper}>
          <CountryModal
            countrySlug={selectedCountry}
            open={open}
            onClosing={onClosing}
          />
          <Table sx={{ minWidth: {
            xs: 200,
            sm: 450,
            md: 650,
            lg: 1400
        } }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columnTitles.map((columnTitle) => (
                  <TableCell align="left">{columnTitle}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  onClick={() => selectRow(row.country)}
                  key={row.country}
                  className="row"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.country}</TableCell>
                  <TableCell align="left">{row.cases}</TableCell>
                  <TableCell align="left">{row.recovered}</TableCell>
                  <TableCell align="left">{row.deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <LinearProgressCondition condition={rows!==[]}/>
        </TableContainer>
      </Box>
    </Grid>
  );
}

export default TableModel;
