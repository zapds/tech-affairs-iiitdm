"use client";

import { useState } from 'react';
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
import EquipmentManagement from './EquipmentManagement';
import PendingRequests from './PendingRequests';
import CompletedBookings from './CompletedBookings';

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
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
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

export default function AdminPage() {
  const { user } = useI2R();
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);

  // Redirect if not admin
  if (user.role !== 'A') {
    return (
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary">
            You don't have admin privileges to access this page.
          </Typography>
        </Box>
      </Box>
    );
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            I2R Lab Admin Panel
          </Typography>
          <Button 
            color="inherit" 
            onClick={() => router.push('/i2r')}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            onClick={() => router.push('/i2r/bookings')}
          >
            Bookings
          </Button>
          <Button 
            color="inherit" 
            onClick={() => router.push('/logout')}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Paper sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="admin tabs">
              <Tab label="Equipment Management" />
              <Tab label="Pending Requests" />
              <Tab label="All Bookings" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <EquipmentManagement />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <PendingRequests />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <CompletedBookings />
          </TabPanel>
        </Paper>
      </Container>
    </>
  );
}
