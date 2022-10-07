import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuElement from './MenuElement';

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
              <MenuElement  tooltipTitle="View profile" ><PersonIcon/></MenuElement>
              <MenuElement  tooltipTitle="Authenticate" ><AdminPanelSettingsIcon/></MenuElement>
              <MenuElement  tooltipTitle="Settings" ><SettingsIcon/></MenuElement>
              <MenuElement  tooltipTitle="Logout" ><LogoutIcon/></MenuElement>
            </Toolbar>
          </AppBar>
      );
}

export default MenuBar;
