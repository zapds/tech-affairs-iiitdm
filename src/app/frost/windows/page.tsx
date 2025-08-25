"use client";

import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function WindowsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <Container className="relative z-10 py-20">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-10">
          Windows Software & Services
        </h1>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Explore essential Windows software and services available for IIITDM users.
        </p>

        <Grid container spacing={6} justifyContent="center">
          {/* Microsoft Office 365 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Typography variant="h6" align="center">
                  Microsoft Office 365
                </Typography>
                <Link
                  href="/frost/windows/office365"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Windows OS */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Typography variant="h6" align="center">
                  Windows OS
                </Typography>
                <Link
                  href="/frost/windows/os"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Microsoft Teams */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Typography variant="h6" align="center">
                  Microsoft Teams
                </Typography>
                <Link
                  href="/frost/windows/teams"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Adobe */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Typography variant="h6" align="center">
                  Adobe
                </Typography>
                <Link
                  href="/frost/windows/adobe"
                  className="text-blue-400 mt-3 hover:underline"
                >
                  View More...
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}