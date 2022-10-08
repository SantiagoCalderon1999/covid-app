import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableSymptoms from './TableSymptoms';

/**
 * Creates a basic form
 * @returns JSX containing the form information 
 */
function BasicTextFields() {
    const columnTitles = [
        "Name",
        "Email",
        "Birthdate",
        "Temperature",
        "Symptoms",
    ];
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        birthdate: "",
        temperature: "",
        symptoms: ""
    })
    const [tableRecords, setTableRecords] = useState([]);
    const handleChange = (e) => {
       setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempTableRecords = tableRecords;
        tempTableRecords.push(inputs);
        setTableRecords(tempTableRecords);
        console.log(tempTableRecords);
    };
    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form>
                <TextField 
                    name="name"
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    value={inputs.name}
                    onChange={handleChange}
                    type="text"
                />
                <br/>
                <TextField 
                    name="email"
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    value={inputs.email}
                    onChange={handleChange}
                    type="text"
                />
                <br/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Birthdate"
                    name="birthdate"
                    value={inputs.birthdate}
                    onChange={(newValue) => {
                        setInputs((prevState) => ({
                            ...prevState,
                            birthdate: newValue,
                        }));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                <br/>
                <TextField
                    name="temperature"
                    id="outlined-end-adornment"
                    label="Temperature"
                    variant="outlined" 
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                    }}
                    type="number"
                    value={inputs.temperature}
                    onChange={handleChange}
                />
                <br/>
                <TextField 
                    name="symptoms"
                    id="outlined-basic" 
                    label="Symptom" 
                    variant="outlined" 
                    value={inputs.symptom}
                    onChange={handleChange}
                    type="text"
                />
                <br/>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
            </form>
            <br/>
            <TableSymptoms columnTitles={columnTitles}/>
        </Box>
        
    );
}

export default BasicTextFields;