import React from 'react';
import TableModel from './TableModel';
import CovidAPI from '../apis/CovidAPI';

/**
 * Places in screen the historical data page
 * @returns JSX containing the historical data page
 */

class CountryDataPage extends React.Component{
    state = {rows: [{
        "country": "",
        "cases": "",
        "recovered": "",
        "deaths": "",
        "detail": ""
    }]}
    getRows = async () => {
        let response = await CovidAPI.get("/summary");
        return (response.data.Countries.map(country => {
            return {
                "country": country.Slug,
                "cases": country.TotalConfirmed,
                "recovered": country.TotalRecovered,
                "deaths": country.TotalDeaths,
                "detail": ""
            };
        }));
    }
    componentDidMount(){
        this.getRows().then(result => this.setState({rows:result})); 
    }
    render(){
    const columnTitles = ["Country", "Cases", "Recovered", "Deaths", ""];
    return (
        <TableModel columnTitles = {columnTitles} rows = {this.state.rows}/>
    );
    }
}
export default CountryDataPage;

