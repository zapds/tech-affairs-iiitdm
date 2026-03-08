
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
    color: '#34d399',
  },
  {
    title: 'International Rover Challenge 2025 (Onsite)',
    description: '16th place internationally',
    image: '/teams/mars/logo.png',
    date: '2025',
    category: 'Mars Club',
    color: '#fb923c',
  },
  {
    title: 'SAE eBaja 2025 - Overall',
    description: 'Finished with an overall All-India Rank of 35 out of 86 teams.',
    image: '/teams/revolt/logo.png',
    date: '2025',
    category: 'SAE Collegiate Club',
    color: '#f472b6',
  },
  {
    title: 'SAE mBaja 2025 - Overall',
    description: 'Secured an impressive overall All India Rank (AIR) of 18.',
    image: '/teams/revolt/logo.png',
    date: '2025',
    category: 'SAE Collegiate Club',
    color: '#a78bfa',
  },
];

const Achievements = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const maxIndex = achievements.length - 1;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
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

  const current = achievements[currentIndex];

  return (
    <Box
      id="achievements"
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
              color: '#34d399',
              mb: 1.5,
              textAlign: 'center',
            }}
          >
            Achievements
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.8rem' },
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.12,
              mb: 5,
              textAlign: 'center',
              color: 'text.primary',
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
              transform: `translateX(-${currentIndex * 100}%)`,
              pb: 4,
            }}
          >
            {achievements.map((achievement) => (
              <Box
                key={achievement.title}
                sx={{
                  minWidth: '100%',
                  boxSizing: 'border-box',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 80, sm: 100 },
                    height: { xs: 80, sm: 100 },
                    borderRadius: 3.5,
                    background: `${achievement.color}10`,
                    border: `1px solid ${achievement.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <Box
                    component="img"
                    src={achievement.image}
                    alt={achievement.title}
                    sx={{
                      width: { xs: 60, sm: 70 },
                      height: { xs: 60, sm: 70 },
                      objectFit: 'contain',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'inline-block',
                    fontSize: '0.65rem',
                    fontWeight: 650,
                    color: achievement.color,
                    background: `${achievement.color}12`,
                    px: 1.5,
                    py: 0.4,
                    borderRadius: 1.5,
                    letterSpacing: '0.03em',
                    mb: 1.5,
                  }}
                >
                  {achievement.category}
                </Box>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 720,
                    color: 'text.primary',
                    mb: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {achievement.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: 'text.secondary',
                    lineHeight: 1.65,
                    maxWidth: 500,
                  }}
                >
                  {achievement.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Navigation arrows */}
          {achievements.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.14)'}`,
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,1)',
                  },
                  zIndex: 1,
                }}
              >
                <ArrowBackIosIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.14)'}`,
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,1)',
                  },
                  zIndex: 1,
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
              </IconButton>
            </>
          )}

          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 0.5 }}>
            {achievements.map((a, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: index === currentIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: index === currentIndex ? a.color : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)'),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              href="/achievements"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '0.95rem',
                borderRadius: 3.5,
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
