"use client"

import React from 'react';
import {
  Typography,
  GridLegacy as Grid,
  Box,
  Avatar,
  Card,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: 220,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: 120,
  }
}));

interface Member {
  name: string;
  role?: string;
  position?: string;
  image: string;
  email?: string;
  linkedin?: string;
  roll?: string;
}

export default function MemberGrid({ members, handleOpen }: { members: Member[]; handleOpen: (image: string) => void }) {
  const theme = useTheme();
  if (!members.length) return <Typography color="text.secondary" align="center">No data available.</Typography>;
  return (
    <Grid container spacing={1} justifyContent='center' sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {members.map((member) => (
        <Grid item xs={6} sm={6} md={3} key={member.name} sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
          <TeamMemberCard onClick={() => handleOpen(member.image)}>
            <Box
              sx={{
                borderRadius: '50%',
                p: '4px',
                background: theme.palette.mode === 'dark' ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : theme.palette.grey[200],
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                mb: { xs: 0.75, sm: 1, md: 1.5 },
                border: theme.palette.mode === 'light' ? `4px solid ${theme.palette.primary.main}` : 'none', // Added border for light theme
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: { xs: 70, sm: 90, md: 110 }, height: { xs: 70, sm: 90, md: 110 }, 
                // border: `4px solid ${theme.palette.background.paper}` // Removed this
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                width: '100%',
                textAlign: 'center',
                overflowWrap: { xs: 'break-word', sm: 'break-word', md: 'break-word' },
                wordBreak: { xs: 'break-word', sm: 'break-word', md: 'break-word' },
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                mb: { xs: 0.25, sm: 0.25, md: 0.5 },
                wordBreak: 'break-word',
                overflowWrap: 'anywhere',
              }}
            >
              {member.email ? (
                <a href={`mailto:${member.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {member.email}
                </a>
              ) : (member.role || member.position)}
            </Typography>
          </TeamMemberCard>
        </Grid>
      ))}
    </Grid>
  );
}