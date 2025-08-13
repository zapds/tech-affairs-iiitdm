import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: '13', label: 'Technical Clubs' },
  { number: '6', label: 'Competitive Teams' },
  { number: '10+', label: 'Esteemed Awards' },
  { number: '50+', label: 'Events Annually' },
  { number: '20+', label: 'Sponsors' },
];

const About = () => {
  return (
    <Box
      id="about"
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
            About Us
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '9999px', padding: '1rem' }}>
          <Image alt="Institute Logo" src="/iiitdm_logo.png" height={150} width={150} />
          </div>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Technical Affairs at IIITDM Kancheepuram is the driving force behind technical innovation and excellence. 
            We foster a culture of learning, innovation, and collaboration through our diverse range of technical clubs 
            and competitive teams. Our mission is to empower students with practical skills, industry exposure, and 
            opportunities to showcase their talents on national and international platforms.
          </Typography>
        </motion.div>

        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <Box 
              key={stat.label}
              sx={{
                flex: {
                  xs: '1 1 100%',
                  sm: '1 1 calc(50% - 8px)',
                  md: '1 1 calc(20% - 8px)'
                },
                minWidth: {
                  xs: '260px',
                  md: '180px'
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
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    mx: 'auto',
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
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

export default About; 