import React from 'react';
import {
  Box,
  Container,
  Typography,
  GridLegacy as Grid,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const Techfest = () => {
  return (
    <Box
      id="techfest"
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
            Our Annual Techfest
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            {/* This grid item is left empty to create the layout where content is on the right */}
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'left',
                }}
              >
                Vashisht is a much awaited three-day tech-fest that assessed participants in a variety of subjects, from robots to entrepreneurship, coding to designing. It inspired a love of technology, opening students' eyes to new avenues for creativity and drawing more than 3000+ pupils from all across the nation.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'left',
                }}
              >
                At Vashisht, we are more than just a festival; we are a movement. Our goal is to build a technically engaged community that thrives on technical activities, not merely for entertainment but as a means of community building, ideation, and sharing groundbreaking ideas.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Box sx={{ textAlign: 'left' }}>
                <Button
                  variant="contained"
                  size="large"
                  href="https://www.vashisht.iiitdm.ac.in/"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Explore Vashisht
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Techfest; 