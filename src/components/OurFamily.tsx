import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

const clubs = [
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
    name: 'Robotics Club',
    image: '/clubs/robotics/logo.png',
    link: '/clubs/robotics',
  },
  {
    name: 'E-Cell',
    image: '/societies/Ecell/logo.png',
    link: '/societies/Ecell',
  },
  {
    name: 'System Coding Club',
    image: '/clubs/Scc/logo.png',
    link: '/clubs/scc',
  },
];

const teams = [
  {
    name: 'Team Nira',
    description: 'AUV Society',
    image: '/teams/nira/logo.jpg',
    link: '/teams/nira',
  },
  {
    name: 'Team Astra',
    description: 'Space Technology',
    image: '/teams/astra/logo.png',
    link: '/teams/astra',
  },
  {
    name: 'Revolt Racers',
    description: 'SAE E-Baja',
    image: '/teams/revolt/logo.png',
    link: '/teams/revolt',
  },
  {
    name: 'Team TAD',
    description: 'Aero Design',
    image: '/teams/tad/logo.png',
    link: '/teams/tad',
  },
  {
    name: 'Team Shunya (MaRS)',
    description: 'Mars Rover',
    image: '/teams/mars/logo.png',
    link: '/teams/shunya',
  },
];

const OurFamily = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
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
              color: '#3275AA',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Our Family
          </Typography>
        </motion.div>

        <Box sx={{ mb: 3 }}>
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

        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          {(activeTab === 0 ? clubs : teams).map((item, index) => (
            <Box 
              key={item.name}
              sx={{
                flex: {
                  xs: '1 1 100%',
                  sm: '1 1 calc(50% - 8px)',
                  md: '1 1 calc(33.333% - 8px)'
                },
                minWidth: {
                  xs: '260px',
                  md: '220px'
                }
              }}
            >
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
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurFamily; 
