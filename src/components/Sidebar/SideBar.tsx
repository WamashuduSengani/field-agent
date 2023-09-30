import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing user authentication state and redirecting to login page
    navigate('/login');
  };

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={RouterLink} to="/map">
          <ListItemText primary="Maps" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
