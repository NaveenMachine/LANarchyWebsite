import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'static', // Change to 'fixed' if you want it always visible
        bottom: 0,
        width: '100vw',
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text and icon color to white
        padding: 2,
        textAlign: 'center',
      }}
    >
      {/* Social Media Icons */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        Follow Us
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{ color: 'white' }} // Set icon color to white
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: 'white' }} // Set icon color to white
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: 'white' }} // Set icon color to white
        >
          <LinkedInIcon />
        </IconButton>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Made with ❤️. © {new Date().getFullYear()} Naveen Kamath. All rights reserved.
      </Typography>
    </Box>
  );
}
