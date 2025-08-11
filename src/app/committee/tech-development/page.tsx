"use client"

import React from 'react';
import {
  Container,
  Typography,
  GridLegacy as Grid,
  Box,
  Avatar,
  IconButton,
  Card,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: 220,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  wordBreak: 'break-word',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: 120,
  }
}));

const cores = [
  {
    name: 'R Darshan Karthikeya',
    role: 'Tech Development Core',
    image: '/technical-affairs-team/tech-development/cores/RDarshanKarthikeya.jpg',
    email: 'cs22b1022@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/darshan-karthikeya',
    roll: 'CS22B1022',
  },
  {
    name: 'Avula Varshini',
    role: 'Tech Development Core',
    image: '/technical-affairs-team/tech-development/cores/AVarshini.jpg',
    email: 'cs23b1015@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/varshini-avula',
    roll: 'CS23B1015',
  },
];

const coordinators = [
  {
    name: 'Thatipalli Santhoshini',
    image: '/technical-affairs-team/tech-development/coordinators/CS24I1013.jpg',
    email: 'cs24i1013@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/santhoshini-thatipalli-265497306',
    roll: 'CS24I1013',
  },
  {
    name: 'Yashvanth S',
    image: '/technical-affairs-team/tech-development/coordinators/CS24I1029.png',
    email: 'cs24i1029@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/yashvanths/',
    roll: 'CS24I1029',
  },
  {
    name: 'D Pritika',
    image: '/technical-affairs-team/tech-development/coordinators/CS24I1040.jpg',
    email: 'cs24i1040@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/pritika-desinghu-aaa9a9363/',
    roll: 'CS24I1040',
  },
  {
    name: 'Narendhar T S',
    image: '/technical-affairs-team/tech-development/coordinators/EC24B1053.jpg',
    email: 'ec24b1053@iiitdm.ac.in',
    linkedin: 'https://linkedin.com/in/narendharts',
    roll: 'EC24B1053',
  },
];

function MemberGrid({ members }) {
  if (!members.length) return <Typography color="text.secondary" align="center">No data available.</Typography>;
  return (
    <Grid container spacing={1} justifyContent='center' sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {members.map((member, idx) => (
        <Grid item xs={6} sm={6} md={3} key={member.name} sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
          <TeamMemberCard>
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: { xs: 70, sm: 90, md: 110 }, height: { xs: 70, sm: 90, md: 110 }, mb: { xs: 0.75, sm: 1, md: 1.5 } }}
            />
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
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mb: { xs: 0.25, sm: 0.25, md: 0.5 }, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{member.roll}</Typography>
            <Box sx={{ mt: { xs: 0.75, sm: 1, md: 1.5 }, display: 'flex', gap: { xs: 0.4, sm: 0.6, md: 0.8 }, flexWrap: 'wrap', justifyContent: 'center' }}>
              <IconButton component="a" href={`mailto:${member.email}`} color="primary" size="small" sx={{ padding: { xs: '3px', sm: '6px', md: '10px' } }}>
                <EmailIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
              </IconButton>
              <IconButton component="a" href={member.linkedin} target="_blank" color="primary" size="small" sx={{ padding: { xs: '3px', sm: '6px', md: '10px' } }}>
                <LinkedInIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
              </IconButton>
            </Box>
          </TeamMemberCard>
        </Grid>
      ))}
    </Grid>
  );
}

const sectionTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' },
  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 4,
};

const teamTitleStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  mb: 2,
};

const teamDescription = 'The Tech Development team focuses on building, maintaining, and innovating technical solutions for the institute. We drive software, hardware, and automation projects, and support all technical initiatives.';

export default function TechDevelopmentCore() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Tech Development</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>{teamDescription}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Cores</Typography>
        <MemberGrid members={cores} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Coordinators</Typography>
        <MemberGrid members={coordinators} />
      </Box>
    </Container>
  );
} 