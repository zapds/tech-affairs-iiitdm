"use client";

import { useState, useEffect } from 'react';
import { 
//   AppBar, 
//   Toolbar, 
  Typography, 
//   Button, 
  Container, 
  Box,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { useRouter } from 'next/navigation';
import EventsManagement from './EventsManagement';
import ClubsManagement from './ClubsManagement';
import { User } from '@/lib/server/user';

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
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user role and authentication
    const checkUserRole = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const userData = await response.json();
          if (userData.role !== 'A') {
            router.push('/');
            return;
          }
          setUser(userData);
        } else {
          router.push('/login/google');
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [router]);

  // Show loading state
  if (loading) {
    return (
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  // Show access denied if not admin
  if (!user || user.role !== 'A') {
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
            Admin Dashboard
          </Typography>
          <Button 
            color="inherit" 
            onClick={() => router.push('/')}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            onClick={() => router.push('/logout')}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="xl" sx={{ my: 16 }}>
        <Paper sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="admin tabs">
              <Tab label="Events Management" />
              <Tab label="Clubs Management" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <EventsManagement />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ClubsManagement />
          </TabPanel>
        </Paper>
      </Container>
    </>
  );
}