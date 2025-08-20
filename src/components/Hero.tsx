import React, { useCallback } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { TypeAnimation } from 'react-type-animation';
import { Engine } from 'tsparticles-engine';

const Hero = () => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getLogoSrc = () => {
    return theme.palette.mode === 'light' ? '/nav_logo_inv.png' : '/nav_logo.png';
  };

  const particlesOptions = {
    fullScreen: false,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: theme.palette.primary.main,
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none", 
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        mt: 0.5,
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: 2,
        pb: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        // @ts-expect-error - particlesOptions has type incompatibility
        options={particlesOptions} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '64rem',
            mx: 'auto',
            textAlign: { xs: 'center', md: 'left' },
            gap: 4,
          }}
        >

          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.1rem', md: '7rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                whiteSpace: 'pre-wrap',
                lineHeight: 1,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <TypeAnimation
                speed={50}
                sequence={['Discover\nTechnical\nExcellence.', () => console.log('done')]}
                wrapper="span"
                cursor={true}
              />
            </Typography>
          </Box>


          <Box sx={{ minWidth: 300, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={getLogoSrc()}
              alt="Logo"
              sx={{ width: { xs: 180, md: 300 }, height: { xs: 180, md: 300 } }}
            />
          </Box>
        </Box>


        <Typography
          variant="h5"
          sx={{
            pt: 7,
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }}
        >
          Welcome to Technical Affairs of Student Affairs Council of IIITDM Kancheepuram
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            size="large"
            href="/events"
            sx={{ px: { xs: 2, sm: 4 }, py: { xs: 0.7, sm: 1.5 }, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}
          >
            Upcoming Events
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/i2r"
            sx={{ px: { xs: 2, sm: 4 }, py: { xs: 0.7, sm: 1.5 }, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}
          >
            About I2R Lab
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
