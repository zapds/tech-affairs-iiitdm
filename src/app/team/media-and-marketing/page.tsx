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
    name: 'Satyam Kumar Pandey',
    role: 'Media and Marketing Core',
    image: '/technical-affairs-team/media-and-marketing/cores/SatyamKumarPandey.jpg',
    email: 'ec23b1103@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/satyam-pandey-1a10442a6',
    roll: 'EC23B1103',
  },
];

const jtcores = [
  {
    name: 'P. Swaminatha',
    image: '/technical-affairs-team/media-and-marketing/jtcores/PSwaminatha.jpg',
    email: 'ec23b1091@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/putcha-swaminatha-a707b92a3/',
    roll: 'EC23B1091',
    role: 'Sponsorship & Finance Jt Core',
  },
  {
    name: 'Parth Pandey',
    image: '/technical-affairs-team/media-and-marketing/jtcores/ParthPandey.png',
    email: 'cs23i1064@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/parth-pandey-b20932299/',
    roll: 'CS23I1064',
    role: 'Publicity Jt Core',
  },
  {
    name: 'Akash Patel',
    image: '/technical-affairs-team/media-and-marketing/jtcores/AkashPatel.jpg',
    email: 'cs23i1055@iiitdm.ac.in',
    linkedin: 'https://linkedin.com/in/whoakashpatel',
    roll: 'CS23I1055',
    role: 'Design Jt Core',
  },
];

const coordinators = [
  {
    name: 'PUTCHA SWAMINATHA',
    image: '/technical-affairs-team/media-and-marketing/coordinators/EC23B1091.jpg',
    email: 'ec23b1091@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/putcha-swaminatha-a707b92a3/',
    roll: 'EC23B1091',
  },
  {
    name: 'P Sri Charan Reddy',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME24B1071.jpg',
    email: 'me24b1071@iiitdm.ac.in',
    linkedin: '',
    roll: 'ME24B1071',
  },
  {
    name: 'P Vinay Kumar',
    image: '/technical-affairs-team/media-and-marketing/coordinators/CS24I1028.jpg',
    email: 'cs24i1028@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/vinay-kumar-959891366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'CS24I1028',
  },
  {
    name: 'Jeevani Yalamanchili',
    image: '/technical-affairs-team/media-and-marketing/coordinators/CS24B1023.jpg',
    email: 'cs24b1023@iiitdm.ac.in',
    linkedin: 'www.linkedin.com/in/jeevani-yalamanchili-b47aa536b',
    roll: 'CS24B1023',
  },
  {
    name: 'Pranav',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME24B1052.jpg',
    email: 'me24b1052@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/pranav-b-5b772531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME24B1052',
  },
  {
    name: 'Sharvesh Vikhranth H',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME23B1036.jpg',
    email: 'me23b1036@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/sharvesh-vikhranth-h-375ba72ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME23B1036',
  },
];


function MemberGrid({ members }) {
  if (!members.length) return <Typography color="text.secondary" align="center">No data available.</Typography>;
  return (
    <Grid container spacing={1} justifyContent='center' sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {members.map((member) => (
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

const teamTitleStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
  color: '#3275AA',
  
  Webkit
  
  textAlign: 'center',
  mb: 2,
};
const teamDescription = 'The Media and Marketing team is responsible for promoting the institute\'s technical initiatives, managing branding, publicity, and communications. We handle social media, design, sponsorship outreach, and ensure all events and achievements reach a wide audience.';

const sectionTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' },
  color: '#3275AA',
  
  Webkit
  
  mb: 4,
};

export default function MediaAndMarketingCore() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Media and Marketing</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>{teamDescription}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Cores</Typography>
        <MemberGrid members={cores} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Joint cores</Typography>
        <MemberGrid members={jtcores} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Coordinators</Typography>
        <MemberGrid members={coordinators} />
      </Box>
    </Container>
  );
} 
