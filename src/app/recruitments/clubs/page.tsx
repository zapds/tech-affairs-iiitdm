"use client";

import React from "react";
import { Box, Container, Typography, Button, alpha } from "@mui/material";
import { useThemeContext } from "../../../context/ThemeContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { motion } from "framer-motion";

const ClubsRecruitmentPage = () => {
  const { isDarkMode } = useThemeContext();
  const color = "#f472b6";

  return (
    <Box
      className={isDarkMode ? "grids-dark" : "grids-light"}
      sx={{
        minHeight: "100vh",
        pt: { xs: 15, md: 20 },
        pb: 8,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            component={Link}
            href="/recruitments"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              borderRadius: 2,
              px: 2,
              '&:hover': {
                bgcolor: isDarkMode ? alpha(color, 0.1) : alpha(color, 0.05),
                color: color,
              }
            }}
          >
            Back to Recruitments
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: color,
                letterSpacing: '-0.04em',
              }}
            >
              Clubs Recruitment
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  bgcolor: alpha(color, 0.1),
                  color: color,
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  border: `1px solid ${alpha(color, 0.2)}`,
                }}
              >
                Status: Open
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 6,
              bgcolor: isDarkMode ? alpha("#ffffff", 0.03) : alpha("#ffffff", 0.7),
              backdropFilter: "blur(20px)",
              border: "1px solid",
              borderColor: isDarkMode ? alpha("#ffffff", 0.08) : alpha("#000000", 0.05),
              textAlign: 'center'
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: alpha(color, 0.1),
                color: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 4
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 800 }}>✓</Typography>
            </Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
              Recruitment is Open!
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                color: 'text.secondary',
                maxWidth: 450,
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              The technical clubs recruitment drive is currently active. 
              Click the button below to fill out the application form.
            </Typography>
            <Button 
              variant="contained" 
              href="https://forms.gle/3Er3vuUr4nBkkQvr8"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                bgcolor: color,
                color: '#fff',
                borderRadius: 3,
                px: 4,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: alpha(color, 0.8),
                }
              }}
            >
              Apply Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ClubsRecruitmentPage;
