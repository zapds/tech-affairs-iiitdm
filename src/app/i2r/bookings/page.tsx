"use client";

import { useState, useEffect } from 'react';
import { useI2R } from '../I2RProvider';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { useRouter } from 'next/navigation';
import MyBookings from './MyBookings';
import NewBooking from './NewBooking';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bookings-tabpanel-${index}`}
      aria-labelledby={`bookings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function BookingsPage() {
  const { user } = useI2R();
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            I2R Lab Booking System
          </Typography>
          <Button 
            color="inherit" 
            onClick={() => router.push('/i2r')}
          >
            Home
          </Button>
          {user.role === 'A' && (
            <Button 
              color="inherit" 
              onClick={() => router.push('/i2r/admin')}
            >
              Admin
            </Button>
          )}
          <Button 
            color="inherit" 
            onClick={() => router.push('/logout')}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="bookings tabs">
              <Tab label="My Bookings" />
              <Tab label="New Booking" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <MyBookings />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <NewBooking onBookingCreated={() => setTabValue(0)} />
          </TabPanel>
        </Paper>
      </Container>
    </>
  );
}
