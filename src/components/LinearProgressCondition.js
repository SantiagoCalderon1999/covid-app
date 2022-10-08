import { LinearProgress } from "@mui/material";
import React from "react";


/**
 * 
 * @returns JSX containing the historical data page
 */

function LinearProgressCondition({ condition }) {
  if (condition) {
    return <LinearProgress />;
  }
  return;
}
export default LinearProgressCondition;
