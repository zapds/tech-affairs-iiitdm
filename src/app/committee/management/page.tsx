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
    name: 'S M Jawhra',
    role: 'Management Core',
    image: '/technical-affairs-team/management/cores/SMJawhra.jpg',
    email: 'cs23b1053@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/s-m-jawhra-2150902b7',
    roll: 'CS23B1053',
  },
  {
    name: 'Dharun Thota',
    role: 'Management Core',
    image: '/technical-affairs-team/management/cores/DharunThota.jpg',
    email: 'cs22b1083@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/dharun-thota-742915264/',
    roll: 'CS22B1083',
  },
];

const coordinators = [
  {
    name: 'G S Raghava Ram',
    image: '/technical-affairs-team/management/coordinators/CS24I1005.jpg',
    email: 'cs24i1005@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/g-sangeeth-raghava-ram-a87431323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'CS24I1005',
  },
  {
    name: 'Nithin M',
    image: '/technical-affairs-team/management/coordinators/EC24B1016.jpg',
    email: 'ec24b1016@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/nithin-satya-sai-ram-maddala-59078431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'EC24B1016',
  },
  {
    name: 'MONISH KUMAR R',
    image: '/technical-affairs-team/management/coordinators/EC24B1051.jpg',
    email: 'ec24b1051@iiitdm.ac.in',
    linkedin: 'www.linkedin.com/in/monish-kumar-r01',
    roll: 'EC24B1051',
  },
  {
    name: 'Adithya Ajay',
    image: '/technical-affairs-team/management/coordinators/EC24B1099.jpg',
    email: 'ec24b1099@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/adithya-ajay-2b92aa370/',
    roll: 'EC24B1099',
  },
  {
    name: 'Gautam Devaraj',
    image: '/technical-affairs-team/management/coordinators/EC24B1039.png',
    email: 'ec24b1039@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/gautam-devaraj-0332b7370/',
    roll: 'EC24B1039',
  },
  {
    name: 'Suranjana Mary',
    image: '/technical-affairs-team/management/coordinators/ME24B1016.jpg',
    email: 'me24b1016@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/suranjana-mary-12646736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME24B1016',
  },
  {
    name: 'Keerthan S',
    image: '/technical-affairs-team/management/coordinators/ME24B1006.jpeg',
    email: 'me24b1006@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/keerthan-santha-kumar-428539304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME24B1006',
  },
  {
    name: 'Bhavana sri',
    image: '/technical-affairs-team/management/coordinators/CS24I1034.jpg',
    email: 'cs24i1034@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/bhavana-sri-28233836a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'CS24I1034',
  },
  {
    name: 'S Yagnesh',
    image: '/technical-affairs-team/management/coordinators/EC24B1103.jpg',
    email: 'ec24b1103@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/s-yagnesh-529112324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'EC24B1103',
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
                overflowWrap: { xs: 'anywhere', sm: 'anywhere', md: 'anywhere' },
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

const teamDescription = 'The Management team ensures smooth operations, event planning, and resource management for all technical affairs. We coordinate logistics, budgeting, and support for all teams and initiatives.';

export default function ManagementCore() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Management</Typography>
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