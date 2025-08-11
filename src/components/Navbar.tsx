import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme as useMuiTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Council', path: '/council' },
  { name: 'Committee', path: '/committee' },
];

const Navbar = () => {
  const theme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getLogoSrc = () => {
    return theme.palette.mode === 'light' ? '/nav_logo_inv.png' : '/nav_logo.png';
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src={getLogoSrc()}
        alt="Technical Affairs Logo"
        sx={{
          height: 40,
          my: 2,
        }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: 'center',
                color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
                '&.active': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={toggleTheme}
            sx={{
              textAlign: 'center',
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <ListItemText primary={isDarkMode ? 'Light Mode' : 'Dark Mode'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? theme.shadows[4] : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        style={{
          '--Paper-overlay': 'none !important', // Fix for material UI bug trying to set transparent background
        }}
        enableColorOnDark={true}
      >
        <Toolbar sx={{ px: { xs: 2, md: 3 }}}>
          <Box
            component="img"
            src={getLogoSrc()}
            alt="Technical Affairs Logo"
            sx={{
              height: 40,
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            }}
          >
            Technical Affairs
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NavLink}
                to={item.path}
                color="inherit"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  '&.active': {
                    color: 'primary.main',
                    fontWeight: 'bold',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;