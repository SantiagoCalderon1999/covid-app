import React from 'react';
import TableModel from './TableModel';
import CovidAPI from '../apis/CovidAPI';
import SearchBar from './SearchBar';

/**
 * Places in screen the historical data page
 * @returns JSX containing the historical data page
 */

class CountryDataPage extends React.Component{
    state = {
        rows: [{
        "country": "",
        "cases": "",
        "recovered": "",
        "deaths": "",
        "detail": ""
        }],
        rowsStored: [{
        "country": "",
        "cases": "",
        "recovered": "",
        "deaths": "",
        "detail": ""
        }]
    }
    filterRows = (text) => {
        let tempRows = this.state.rowsStored;
        tempRows = tempRows.filter(row => row.country.includes(text));
        this.setState({rows: tempRows});
    }
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
        this.getRows().then(result => this.setState({rows:result, rowsStored:result})); 
    }
    render(){
    const columnTitles = ["Country", "Cases", "Recovered", "Deaths", ""];
    return (
        <div>
            <SearchBar filterRows={this.filterRows}/>
            <br/>
            <TableModel columnTitles = {columnTitles} rows = {this.state.rows}/>
        </div>
    );
    }
}
export default CountryDataPage;

