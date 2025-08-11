import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Tabs,
  Tab,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

const clubs = [
  {
    name: 'Mars Club',
    image: '/clubs/mars/logo.png',
    link: '/clubs/mars',
  },
  {
    name: 'CS Club',
    image: '/clubs/csclub/logo.png',
    link: '/clubs/cs',
  },
  {
    name: 'Developers Club',
    image: '/clubs/devclub/logo.jpg',
    link: '/clubs/dev',
  },
  {
    name: 'AUV Society',
    image: '/clubs/auv/logo.png',
    link: '/clubs/auv',
  },
  {
    name: 'TAD',
    image: '/clubs/tad/logo.jpg',
    link: '/clubs/tad',
  },
  {
    name: 'Robotics Club',
    image: '/clubs/robotics/logo.png',
    link: '/clubs/robotics',
  },
  {
    name: 'SAE Collegiate Club',
    image: '/clubs/sae-collegiate/logo.png',
    link: '/clubs/sae',
  },
];

const teams = [
  {
    name: 'Nira',
    description: 'AUV Society',
    image: '/teams/nira/logo.png',
    link: '/teams/nira',
  },
  {
    name: 'Team Astra',
    description: 'SAE Club',
    image: '/teams/astra/logo.png',
    link: '/teams/astra',
  },
  {
    name: 'Revolt Racers',
    description: 'SAE Club',
    image: '/teams/revolt/logo.png',
    link: '/teams/revolt',
  },
  {
    name: 'Team Shunya',
    description: 'Mars Club',
    image: '/teams/shunya/logo.png',
    link: '/teams/shunya',
  },
];

const OurFamily = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id="our-family"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Our Family
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                textTransform: 'none',
              },
            }}
          >
            <Tab label="Technical Clubs" />
            <Tab label="Competitive Teams" />
          </Tabs>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {(activeTab === 0 ? clubs : teams).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  component="a"
                  href= {item.link}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      objectFit: 'contain',
                      width: { xs: '80px', sm: '100px' },
                      height: { xs: '80px', sm: '100px' },
                      borderRadius: '8px',
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamily; 