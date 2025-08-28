"use client";

import React from "react";
import Link from "next/link";
import { GridLegacy as Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { SiUbuntu, SiDebian, SiLinuxmint, SiGentoo } from "react-icons/si";
import { Box } from "@mui/material";
import { GridsBg } from "@/components/GridsBg";

export default function LinuxPage() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'background.default', color: 'text.primary', position: 'relative' }}>
      <GridsBg />

      <Container className="relative z-10 py-20">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-10">
          Linux Distributions
        </h1>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Explore popular Linux distributions available for installation and
          support in the IIITDMK community.
        </p>

        <Grid container spacing={6} justifyContent="center">
          {/* Ubuntu */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <SiUbuntu className="text-6xl text-blue-400 mb-6" />
                <Typography variant="h6">Ubuntu</Typography>
                <Link
                  href="/frost/linux/ubuntu"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Debian */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <SiDebian className="text-6xl text-blue-400 mb-6" />
                <Typography variant="h6">Debian</Typography>
                <Link
                  href="/frost/linux/debian"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Linux Mint */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <SiLinuxmint className="text-6xl text-blue-400 mb-6" />
                <Typography variant="h6">Linux Mint</Typography>
                <Link
                  href="/frost/linux/linux-mint"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Gentoo */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <SiGentoo className="text-6xl text-blue-400 mb-6" />
                <Typography variant="h6">Gentoo</Typography>
                <Link
                  href="/frost/linux/gentoo"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
