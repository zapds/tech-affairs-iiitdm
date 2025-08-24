// app/components/Navbar/Navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../context/ThemeContext";
import { usePathname } from "next/navigation";

// Define the User and Session types based on your application's data structure
export interface User {
  id: number;
  email: string;
  googleId: string;
  name: string;
  picture: string; // This will be used for the Avatar src
  role: string;
}

// Define the props for the Navbar component
interface NavbarProps {
  user: User | null;
}

const navItems = [
  { name: "Events", path: "/events" },
  { name: "Achievements", path: "/achievements" },
  { name: "I2R Lab", path: "/i2r" },
  { name: "Our Team", path: "/team" },
];

const Navbar = ({ user }: NavbarProps) => {
  const theme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const getLogoSrc = () => (theme.palette.mode === "light" ? "/nav_logo_inv.png" : "/nav_logo.png");

  // Drawer for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={getLogoSrc()}
        alt="Technical Affairs Logo"
        sx={{ height: 40, my: 2 }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{
                textAlign: "center",
                color: theme.palette.mode === "dark" ? "white" : "text.primary",
                "&:hover": { color: "primary.main" },
                ...(pathname === item.path && {
                  color: "primary.main",
                  fontWeight: "bold",
                }),
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
              textAlign: "center",
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {/* Authentication links in mobile drawer */}
        {user ? (
          <>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/login/google" sx={{ textAlign: "center" }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          {user.role === 'A' && (
              <ListItem disablePadding>
              <ListItemButton component="a" href="/admin" sx={{ textAlign: "center" }}>
                <ListItemText primary="Admin" />
              </ListItemButton>
            </ListItem>
          )}
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton component="a" href="/login/google" sx={{ textAlign: "center" }}>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? theme.shadows[4] : "none",
          transition: "all 0.3s ease-in-out",
        }}
        style={{ "--Paper-overlay": "none !important" } as React.CSSProperties} 
        enableColorOnDark
      >
        <Toolbar sx={{ px: { xs: 2, md: 3 } }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Box
            component="img"
            src={getLogoSrc()}
            alt="Technical Affairs Logo"
            sx={{ height: 40, mr: 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", md: "block" },
              fontWeight: 700,
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
            }}
          >
            Technical Affairs
          </Typography>

          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.path}
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "text.primary",
                  "&:hover": { color: "primary.main" },
                  ...(pathname === item.path && {
                    color: "primary.main",
                    fontWeight: "bold",
                  }),
                }}
              >
                {item.name}
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: theme.palette.mode === "dark" ? "white" : "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* User authentication section for desktop */}
            {user ? (
              <Box sx={{ flexGrow: 0, ml: 1 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem disabled>
                    <Typography textAlign="center">{user.name}</Typography>
                  </MenuItem>
                  <Divider />
                  {user.role === 'A' && (
                      <MenuItem component="a" href="/admin" onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Admin</Typography>
                    </MenuItem>
                  )}
                  <MenuItem component="a" href="/logout" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                component="a"
                href="/login/google"
                variant="contained"
                color="primary"
                sx={{ my: 1, ml: 1.5 }}
              >
                Sign In
              </Button>
            )}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
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
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            bgcolor:
              theme.palette.mode === "dark" ? "background.paper" : "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;