import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableSymptoms from './TableSymptoms';
import Grid from '@mui/material/Grid';

const columnTitles = [
    "Name",
    "Email",
    "Birthdate",
    "Temperature (°C)",
    "Symptoms",
];

/**
 * Creates a basic form
 * @returns JSX containing the form information 
 */
function BasicTextFields() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        birthdate: null,
        temperature: "",
        symptoms: ""
    })
    const [tableRecords, setTableRecords] = useState([]);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
       setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            let tempTableRecords = tableRecords;
            tempTableRecords.push(inputs);
            setTableRecords(tempTableRecords);
        }
    };
    const validateEmail = (email) => {
        return email.match(
            /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
        );
      };
    const validate = () => {
        let temp = {}
        temp.email = inputs.email ? "" : "This field is required";
        temp.email = validateEmail(inputs.email) ? "" : "This is not a valid email address";
        temp.name = inputs.name ? "" : "This field is required";
        temp.temperature = inputs.temperature ? "" : "This field is required";
        temp.birthdate = inputs.birthdate ? "" : "This field is required";
        temp.symptoms = inputs.symptoms ? "" : "This field is required";
        setErrors({
            ...temp
        });
        return Object.values(temp).every(x => x === "")
    };
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '80ch' },
                }}
                alignItems="center"
                noValidate
                autoComplete="off"
            >
                <form>
                    {console.log(errors.name)}
                    <TextField 
                        name="name"
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        value={inputs.name}
                        onChange={handleChange}
                        error = {errors.name !== "" && errors.name !== undefined}
                        helperText = {errors.name}
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
                        error = {errors.email !== "" && errors.email !== undefined}
                        helperText = {errors.email}
                    />
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Birthdate"
                        name="birthdate"
                        value={inputs.birthdate}
                        onChange={(newValue) => {
                            if(newValue)
                                setInputs((prevState) => ({
                                    ...prevState,
                                    birthdate: newValue.toString(),
                                }));
                        }}
                        
                        renderInput={(params) => 
                            <TextField
                                {...params} 
                                name="birthdate"
                                onChange={handleChange}
                                error = {errors.birthdate !== "" && errors.birthdate !== undefined}
                                helperText = {errors.birthdate}
                            />
                        }
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
                        error = {errors.temperature !== "" && errors.temperature !== undefined}
                        helperText = {errors.temperature}
                    />
                    <br/>
                    <TextField 
                        name="symptoms"
                        id="outlined-basic" 
                        label="Symptom" 
                        variant="outlined" 
                        value={inputs.symptoms}
                        onChange={handleChange}
                        type="text"
                        error = {errors.symptoms !== "" && errors.symptoms !== undefined}
                        helperText = {errors.symptoms}
                    />
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        noValidate
                        autoComplete="off"
                        mb={3}
                        mr={1}
                        mt={1}
                    >
                        <Button type='submit' variant="contained" sx={{align:'right'}} onClick={handleSubmit}>Submit</Button>
                    </Box>
                </form>
                <TableSymptoms columnTitles={columnTitles} rows={tableRecords}/>
            </Box>
        </Grid>
    );
}

export default BasicTextFields;