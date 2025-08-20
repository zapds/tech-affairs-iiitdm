"use client";

import { useI2R } from './I2RProvider';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Paper
} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function I2RPage() {
  const { user } = useI2R();
  const router = useRouter();

  return (
    <>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to I2R Lab Booking System
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Welcome, {user.name}! ({user.email})
          </Typography>
          <Typography variant="body1" paragraph>
            Role: {user.role === 'A' ? 'Administrator' : 'User'}
          </Typography>
          
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => router.push('/i2r/bookings')}
            >
              My Bookings
            </Button>
            {/* <Button 
              variant="outlined" 
              size="large"
              onClick={() => router.push('/i2r/bookings/new')}
            >
              New Booking
            </Button> */}
            {user.role === 'A' && (
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                onClick={() => router.push('/i2r/admin')}
              >
                Admin Panel
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
}