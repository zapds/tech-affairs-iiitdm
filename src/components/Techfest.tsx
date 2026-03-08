import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Techfest = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="techfest"
      sx={{
        py: { xs: 8, md: 12 },
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
            sx={{
              fontSize: '0.72rem',
              fontWeight: 650,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#a78bfa',
              mb: 1.5,
              textAlign: 'center',
            }}
          >
            Annual Event
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.8rem' },
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.12,
              mb: 2,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Our Annual Techfest
          </Typography>
        </motion.div>

        <Box
          sx={{
            maxWidth: 700,
            mx: 'auto',
            mt: 4,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: isDark
              ? 'linear-gradient(145deg, rgba(167,139,250,0.06), rgba(244,114,182,0.04))'
              : 'linear-gradient(145deg, rgba(167,139,250,0.08), rgba(244,114,182,0.05))',
            border: `1px solid ${isDark ? 'rgba(167,139,250,0.12)' : 'rgba(167,139,250,0.18)'}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              sx={{
                mb: 2.5,
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              Vashisht is a much awaited three-day tech-fest that assessed participants in a variety of subjects, from robots to entrepreneurship, coding to designing. It inspired a love of technology, opening students&apos; eyes to new avenues for creativity and drawing more than 3000+ pupils from all across the nation.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              At Vashisht, we are more than just a festival; we are a movement. Our goal is to build a technically engaged community that thrives on technical activities, not merely for entertainment but as a means of community building, ideation, and sharing groundbreaking ideas.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              size="large"
              href="https://www.vashisht.iiitdm.ac.in/"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '0.95rem',
                borderRadius: 3.5,
                background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                boxShadow: '0 4px 14px -3px rgba(167,139,250,0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  boxShadow: '0 6px 20px -3px rgba(167,139,250,0.5)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Explore Vashisht
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Techfest;
