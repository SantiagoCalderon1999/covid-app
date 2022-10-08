import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CovidAPI from '../apis/CovidAPI';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
  } from "@progress/kendo-react-charts";
import "hammerjs";
import '@progress/kendo-theme-default/dist/all.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const names = [
    "deaths", "confirmed", "recovered", "active", "date"
]

/**
 * Transforms an array by reordering the internal objects
 * @param {*} arr Array to be transformed
 * @returns array transformed
 */
const transformArray = (arr) => {
    let arrayTransformed = names.map((name) =>{
        return {
            name: name,
            values:[]
        }
    });
    arr.forEach( (object) => {
        arrayTransformed.forEach( (element) => {
            element.values = [object[element.name]].concat(element.values);
        });
    });
    return arrayTransformed;
}
  /**
   * Shows a modal with all the information of a country 
   * @returns JSX containing all the elements needed for the modal
   */
function CountryModal({countrySlug, open, onClosing}) {
    const [countryInfo, setCountryInfo] = useState(names.map((name) =>{
            return {
                name: name,
                values:[]
            }
        }));
    const handleClose = () => {
        onClosing();
    };
    const retrieveCountryInfo = async (countrySlug) => {
        if(countrySlug){
            let response = await CovidAPI.get(`/dayone/country/${countrySlug}`);
            return (response.data.map(country => {
                return {
                    "deaths": country.Deaths,
                    "confirmed": country.Confirmed,
                    "recovered": country.Recovered,
                    "active": country.Active,
                    "date": country.Date
                };
            }));
        }
    }
    

    useEffect(() => {
        if(countrySlug){
            retrieveCountryInfo(countrySlug).then(result => {
                setCountryInfo(transformArray(result.slice(0, 360)))
            });
        }},[countrySlug]);


        
  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 500 }}>
      <Chart
            style={{
              height: 500,
            }}
          >
            <ChartTitle text={countrySlug} />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={countryInfo[4].values} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {countryInfo.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="line"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.values}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
      </Box>
    </Modal>
  </div>
  );
}

export default CountryModal;