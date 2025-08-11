import React from 'react';
import {
  Container,
  Typography,
  Grid,
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
    name: 'SHREEPAL',
    role: 'Innovation Core',
    image: '/technical-affairs-team/innovation/cores/Shreepal.jpg',
    email: 'ec23b1107@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/shreepal29',
    roll: 'EC23B1107',
  },
];


const coordinators = [
  {
    name: 'M. AKSHARA',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1127.png',
    email: 'ec24b1127@iiitdm.ac.in',
    linkedin: 'https://linkedin.com/in/akshara-muralikumar-0366b431b',
    roll: 'EC24B1127',
  },
  {
    name: 'Savinay.k',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1065.jpg',
    email: 'ec24b1065@iiitdm.ac.in',
    linkedin: '',
    roll: 'EC24B1065',
  },
  {
    name: 'Lohith Chandra',
    image: '/technical-affairs-team/innovation/coordinators/EC24I1006.jpg',
    email: 'ec24i1006@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/lohith-chandra-gogineni-4a2657370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'EC24I1006',
  },
  {
    name: 'G.Gouthami',
    image: '/technical-affairs-team/innovation/coordinators/CS24B1041.jpg',
    email: 'cs24b1041@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/gouthami-gogineni-bb340b370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'CS24B1041',
  },
  {
    name: 'S. Aasritha Sri Varshini',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1023.jpg',
    email: 'ec24b1023@iiitdm.ac.in',
    linkedin: '',
    roll: 'EC24B1023',
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
            {member.roll && <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mb: { xs: 0.25, sm: 0.25, md: 0.5 }, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{member.roll}</Typography>}
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
const teamDescription = 'The Innovation team drives creative thinking and new initiatives, fostering a culture of experimentation and entrepreneurship. We encourage and support novel ideas and projects.';

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

export default function InnovationCore() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Innovation</Typography>
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