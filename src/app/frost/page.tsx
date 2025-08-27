"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  GridLegacy as Grid,
  Card,
  CardContent,
} from "@mui/material";

const frostSections = [
  {
    title: "LINUX",
    items: ["Ubuntu", "Debian", "Linux Mint (Debian Edition)", "Gentoo", "Cent OS"],
  },
  {
    title: "WINDOWS",
    items: [
      "Microsoft Office 365",
      "Windows OS",
      "Visual Studio",
      "Microsoft Forefront",
      "Microsoft .Net",
      "Old Archive",
      "Microsoft Teams",
    ],
  },
  {
    title: "SCIENTIFIC",
    items: [
      "Ansys",
      "Abaqus",
      "COMSOL",
      "Materials Studio",
      "Intel Compilers",
      "PGI Compilers",
      "MATLAB",
    ],
  },
];

function FrostPage() {
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
            FROST
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
            FROST provides access to a wide range of Linux, Windows, and
            Scientific software distributions for the IIITDM community.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} justifyContent="center">
          {frostSections.map((section, index) => (
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
                  <Link
                    href={`/frost/${section.title.toLowerCase()}`}
                    passHref
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        color: "primary.main",
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      View More...
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FrostPage;