import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CovidAPI from "../apis/CovidAPI";
import CountryChart from "./CountryChart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline:"none",
};

const names = ["deaths", "recovered", "active", "date"];

/**
 * Transforms an array by reordering the internal objects
 * @param {*} arr Array to be transformed
 * @returns array transformed
 */
const transformArray = (arr) => {
  let arrayTransformed = names.map((name) => {
    return {
      name: name,
      values: [],
    };
  });
  arr.forEach((object) => {
    arrayTransformed.forEach((element) => {
      element.values = [object[element.name]].concat(element.values);
    });
  });
  return arrayTransformed;
};

/**
 * Empties an array
 * @returns Array of objects containing empty values
 */
const emptyCountryArray = () => {
  return names.map((name) => {
    return {
      name: name,
      values: [],
    };
  });
};

/**
 * Shows a modal with all the information of a country
 * @returns JSX containing all the elements needed for the modal
 */
function CountryModal({ countrySlug, open, onClosing }) {
  const [countryInfo, setCountryInfo] = useState(emptyCountryArray());
  const handleClose = () => {
    onClosing();
    let emptyArray = emptyCountryArray();
    setCountryInfo(emptyArray);
  };
  const retrieveCountryInfo = async (countrySlug) => {
    if (countrySlug) {
      let response = await CovidAPI.get(`/dayone/country/${countrySlug}`);
      return response.data.map((country) => {
        return {
          deaths: country.Deaths,
          recovered: country.Recovered,
          active: country.Active,
          date: country.Date,
        };
      });
    }
  };

  useEffect(() => {
    if (countrySlug) {
      retrieveCountryInfo(countrySlug).then((result) => {
        setCountryInfo(transformArray(result.slice(0, 360)));
      });
    }
  }, [countrySlug]);

  return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style }}>
          <CountryChart countrySlug={countrySlug} countryInfo={countryInfo} />
        </Box>
      </Modal>
  );
}

export default CountryModal;
