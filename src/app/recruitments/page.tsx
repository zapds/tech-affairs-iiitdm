"use client";

import React from "react";
import { Box, Container, Typography, alpha } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemeContext } from "../../context/ThemeContext";

import GroupsIcon from "@mui/icons-material/Groups";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PublicIcon from "@mui/icons-material/Public";

const recruitmentSections = [
  {
    title: "Clubs",
    description:
      "Join our vibrant technical clubs and work on exciting projects, participate in competitions, and build a strong technical community.",
    icon: <GroupsIcon sx={{ fontSize: 36 }} />,
    link: "/recruitments/clubs",
    color: "#f472b6",
  },
  {
    title: "Teams",
    description:
      "Be part of specialized technical teams focusing on robotics, automotive, coding, and more.",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 36 }} />,
    link: "/recruitments/teams",
    color: "#34d399",
  },
  {
    title: "Communities",
    description:
      "Join interest-based communities to share knowledge and collaborate on niche technologies.",
    icon: <PublicIcon sx={{ fontSize: 36 }} />,
    link: "/recruitments/communities",
    color: "#38bdf8",
  },
  {
    title: "Societies",
    description:
      "Engage with professional societies that connect you with industry standards and networking opportunities.",
    icon: <AccountBalanceIcon sx={{ fontSize: 36 }} />,
    link: "/recruitments/societies",
    color: "#a78bfa",
  },
];

export default function RecruitmentsPage() {
  const { isDarkMode } = useThemeContext();

  return (
    <Box
      className={isDarkMode ? "grids-dark" : "grids-light"}
      sx={{
        minHeight: "100vh",
        pt: { xs: 14, md: 18 },
        pb: 10,
      }}
    >
      <Container maxWidth="md">

        {/* HEADER */}

        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.6rem", md: "4rem" },
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Recruitments
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg,#fb923c,#f472b6,#a78bfa,#38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                2026
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "text.secondary",
              }}
            >
              Explore opportunities to contribute, innovate, and lead.
              Find your place in our technical ecosystem.
            </Typography>
          </motion.div>
        </Box>

        {/* GRID */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 4,
          }}
        >
          {recruitmentSections.map((section) => (
            <motion.div key={section.title} whileHover={{ y: -6 }}>
              <Link href={section.link} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    height: 260,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",

                    bgcolor: isDarkMode
                      ? alpha("#ffffff", 0.03)
                      : alpha("#ffffff", 0.7),

                    backdropFilter: "blur(18px)",

                    borderRadius: 6,

                    border: "1px solid",
                    borderColor: isDarkMode
                      ? alpha("#ffffff", 0.08)
                      : alpha("#000000", 0.06),

                    position: "relative",
                    overflow: "hidden",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      borderColor: alpha(section.color, 0.45),
                      bgcolor: isDarkMode
                        ? alpha(section.color, 0.05)
                        : alpha(section.color, 0.03),
                    },
                  }}
                >
                  {/* ICON */}

                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: alpha(section.color, 0.15),
                      color: section.color,
                    }}
                  >
                    {section.icon}
                  </Box>

                  {/* TITLE */}

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {section.title}
                  </Typography>

                  {/* DESCRIPTION */}

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {section.description}
                  </Typography>

                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
}