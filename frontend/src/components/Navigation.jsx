import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Comment Toxicity Detection ~ Shubham Rana
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: 20 }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginRight: 20 }}>About</Link>
          <Link to="/model" style={{ textDecoration: 'none', color: 'white' }}>Model</Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
