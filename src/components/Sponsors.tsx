import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  IconButton,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Combined sponsors data
const allSponsors = [
  { name: 'Microsoft', logo: '/sponsors/microsoft.png' },
  { name: 'Google', logo: '/sponsors/google.png' },
  { name: 'Intel', logo: '/sponsors/intel.png' },
  { name: 'IBM', logo: '/sponsors/ibm.png' },
  { name: 'Oracle', logo: '/sponsors/oracle.png' },
  { name: 'Cisco', logo: '/sponsors/cisco.png' },
  { name: 'Adobe', logo: '/sponsors/adobe.png' },
  { name: 'Autodesk', logo: '/sponsors/autodesk.png' },
  { name: 'MathWorks', logo: '/sponsors/mathworks.png' },
  { name: 'Texas Instruments', logo: '/sponsors/ti.png' },
  { name: 'National Instruments', logo: '/sponsors/ni.png' },
  { name: 'Bosch', logo: '/sponsors/bosch.png' },
];

const Sponsors = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, allSponsors.length - itemsPerPage);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="sponsors"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
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
              Our Sponsors
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                pb: 4,
              }}
            >
              {allSponsors.map((sponsor) => (
                <Box
                  key={sponsor.name}
                  sx={{
                    minWidth: `${100 / itemsPerPage}%`,
                    boxSizing: 'border-box',
                    p: 2,
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 150,
                    }}
                  >
                    <Box
                      component="img"
                      src={sponsor.logo}
                      alt={sponsor.name}
                      sx={{
                        width: 'auto',
                        height: '100%',
                        maxHeight: 100,
                        objectFit: 'contain',
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                      }}
                    />
                  </Paper>
                </Box>
              ))}
            </Box>

            {allSponsors.length > itemsPerPage && (
              <>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.7)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
                    zIndex: 1,
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.7)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
                    zIndex: 1,
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {[...Array(Math.ceil(allSponsors.length / itemsPerPage))].map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handleDotClick(index * itemsPerPage)}
                size="small"
                sx={{
                  p: 0.5,
                  mx: 0.5,
                  color: index * itemsPerPage === currentIndex ? 'primary.main' : 'text.secondary',
                  opacity: index * itemsPerPage === currentIndex ? 1 : 0.5,
                }}
              >
                ●
              </IconButton>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="#"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
              }}
            >
              Become a Sponsor
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Sponsors; 
