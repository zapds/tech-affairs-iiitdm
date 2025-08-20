"use client";

import { useI2R } from './I2RProvider';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Paper,
  Card, 
  CardContent, 
  CardMedia
} from '@mui/material';
import { useRouter } from 'next/navigation';


function I2RIntro() {
  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, boxShadow: 3, borderRadius: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }}
          image="https://via.placeholder.com/300x200.png?text=I2R+Makerspace"
          alt="I2R Makerspace"
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            I²R Makerspace
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Innovative Idea to Reality (I2R) Makerspace is a collaborative hub where creativity meets 
            technology. Designed for innovators, students, and makers, I2R provides the tools, 
            mentorship, and environment to transform ideas into tangible solutions. 
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            From electronics and fabrication to design and prototyping, I2R empowers its members 
            to explore, experiment, and bring their visions to life. It's not just a lab — it's 
            where ideas become reality.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}


export default function I2RPage() {
  const { user } = useI2R();
  const router = useRouter();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <I2RIntro />
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