import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Tooltip from '@mui/material/Tooltip';

const style = { 
  bgcolor: "#1bb21b" 
};

/**
 * Creates a menu bar on top of the page
 * @returns JSX containing the top menu bar
 */
function MenuBar(){
    return (
          <AppBar position="static" sx={style}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                COVID STATISTICS
              </Typography>
              <Tooltip
                title="View profile"
                placement="top"
              >
                <Button color="inherit" data-tip data-for="userTip"><PersonIcon/></Button>
              </Tooltip>
              <Tooltip
                title="Authenticate"
                placement="top"
              >
                <Button color="inherit"><AdminPanelSettingsIcon/></Button>
              </Tooltip>
              <Tooltip
                title="Logout"
                placement="top"
              >
                <Button color="inherit" ><LogoutIcon/></Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
      );
}

export default MenuBar;
