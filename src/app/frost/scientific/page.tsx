"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  GridLegacy as Grid,
} from "@mui/material";

const scientificSections = [
  {
    title: "Engineering & CAD Tools",
    items: [
      "SolidWorks 2023: Powerful 3D CAD design software.",
      "AutoCAD 2023: Leading software for 2D and 3D design.",
      "ANSYS: Engineering simulation software.",
      "Abaqus: Finite element analysis software.",
    ],
  },
  {
    title: "Computational & Scientific Computing",
    items: [
      "MATLAB R2023a: High-level language for numerical computation.",
      "COMSOL Multiphysics: Simulation software for multiphysics problems.",
      "Intel Compilers: Optimized compilers for high performance computing.",
      "PGI Compilers: High performance Fortran/C/C++ compilers.",
    ],
  },
  {
    title: "Materials & Data Analysis",
    items: [
      "Materials Studio: Software for materials modeling and simulation.",
      "R: Language and environment for statistical computing.",
      "Python: Scientific computing with NumPy, SciPy, and pandas.",
    ],
  },
];

export default function ScientificPage() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(45deg, #1976d2, #9c27b0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scientific Software
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            The following scientific software tools are available for research
            and academic use.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} justifyContent="center">
          {scientificSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "background.paper",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "primary.main",
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.items.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 0.8 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
