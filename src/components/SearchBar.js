import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


/**
 * Creates a search bar
 * @param {*} filterRows function containing row to filter
 * @returns JSX containing a search bar
 */
function SearchBar({filterRows}) {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
            setInput(e.target.value);
        };
    const handleSearch = () => {
            filterRows(input);
        }
    return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin:'auto'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Country"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={input}
        onChange={handleChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;