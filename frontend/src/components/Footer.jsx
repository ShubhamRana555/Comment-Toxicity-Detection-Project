import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333333', color: 'white', padding: '10px', marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Comment Toxicity Detection. All rights reserved.
      </Typography>
    </Box>
  );
}
