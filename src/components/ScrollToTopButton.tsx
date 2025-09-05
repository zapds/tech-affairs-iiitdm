"use client";

import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import { useLenis } from 'lenis/react';

const ScrollToTopButton = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const lenis = useLenis();

  const handleClick = () => {
    lenis?.scrollTo(0);
  };

  return (
    <Zoom in={trigger}>
      <Fab
        size="small"
        onClick={handleClick}
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 20,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: theme.palette.text.primary }}/>
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton; 
