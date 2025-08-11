import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const achievements = [
  {
    title: 'SAUVC 2025',
    description: 'Secured 5th place globally in the Singapore AUV Challenge 2025',
    image: '/teams/nira/logo.jpg',
    date: '2025',
    category: 'AUV Society',
  },
  {
    title: 'International Rover Challenge 2025 (Onsite)',
    description: '16th place internationally',
    image: '/teams/mars/logo.png',
    date: '2025',
    category: 'Mars Club',
  },
  {
    title: 'SAE eBaja 2025 - Overall',
    description: 'Finished with an overall All-India Rank of 35 out of 86 teams.',
    image: '/teams/revolt/logo.png',
    date: '2025',
    category: 'SAE Collegiate Club',
  },
  {
    title: 'SAE mBaja 2025 - Overall',
    description: 'Secured an impressive overall All India Rank (AIR) of 18.',
    image: '/teams/revolt/logo.png',
    date: '2025',
    category: 'SAE Collegiate Club',
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = 1; // Display one achievement at a time for the circular slider
  const maxIndex = Math.max(0, achievements.length - itemsPerPage);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000); // Auto-play every 5 seconds
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

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <Box
      id="achievements"
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
            Our Achievements
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`, // Slide one item at a time
              pb: 4, // Padding at the bottom
            }}
          >
            {achievements.map((achievement, index) => (
              <Box
                key={achievement.title}
                sx={{
                  minWidth: `${100 / itemsPerPage}%`, // Each item takes 100% width
                  boxSizing: 'border-box',
                  p: 2, // Padding around each slide item
                  display: 'flex', // Flexbox for content alignment
                  flexDirection: 'column', // Stack content vertically
                  alignItems: 'center', // Center content horizontally
                  textAlign: 'center', // Center text
                }}
              >
                <motion.div // Add motion for animations if desired
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box // Image container
                    component="img"
                    src={achievement.image}
                    alt={achievement.title}
                    sx={{
                      width: { xs: '80px', sm: '100px' }, // Reduced box size
                      height: { xs: '80px', sm: '100px' }, // Reduced box size
                      borderRadius: '8px', // Square shape with smooth curves
                      mb: 2, // Margin below the box
                      flexShrink: 0, // Prevent shrinking
                      objectFit: 'contain', // Maintain aspect ratio
                      bgcolor: 'grey.100', // Light grey background for images
                    }}
                  />
                </motion.div>

                <Typography
                  variant="h6" // Achievement title
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1, // Margin below title
                  }}
                >
                  {achievement.title}
                </Typography>

                {/* Add Club/Team Name (assuming it's not in achievements data, or using category) */}
                {achievement.category && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.category} {/* Using category as a placeholder for club/team name */}
                  </Typography>
                )}

                <Typography
                  variant="body1" // Description
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {achievement.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Add navigation arrows */}
          {achievements.length > itemsPerPage && (
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
                <ArrowBackIosIcon />
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

          {/* Add pagination dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {[...Array(achievements.length)].map((_, index) => (
              <IconButton
                key={index}
                onClick={() => handleDotClick(index)}
                size="small"
                sx={{
                  p: 0.5,
                  mx: 0.5,
                  color: index === currentIndex ? 'primary.main' : 'text.secondary',
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
              >
                ●
              </IconButton>
            ))}
          </Box>

          {/* Keep the View All Achievements button if needed */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="/achievements"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
              }}
            >
              View All Achievements
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements; 