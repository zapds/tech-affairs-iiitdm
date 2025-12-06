"use client"

import React, { useState } from 'react';
import {
  Container,
  Typography,
  GridLegacy as Grid,
  Box,
  Avatar,
  IconButton,
  Card,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {
  Download as DownloadIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import Image from 'next/image';

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

interface Member {
  name: string;
  role?: string;
  position?: string;
  image: string;
  email?: string;
  linkedin?: string;
  roll?: string;
}

function MemberGrid({ members, handleOpen }: { members: Member[]; handleOpen: (image: string) => void }) {
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

const sectionTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' },
  color: '#3275AA',
  mb: 4,
};

const teamTitleStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
  color: '#3275AA',
  textAlign: 'center',
  mb: 2,
};

const teamDescription = 'The Tech Development team focuses on building, maintaining, and innovating technical solutions for the institute. We drive software, hardware, and automation projects, and support all technical initiatives.';

export default function TechDevelopmentCore() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = selectedImage.split('/').pop() || 'faculty-image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Tech Development</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>{teamDescription}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Cores</Typography>
        <MemberGrid members={cores} handleOpen={handleOpen}/>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Coordinators</Typography>
        <MemberGrid members={coordinators} handleOpen={handleOpen}/>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '60vw', sm: '50vw', md: '35vw', lg: '25vw' },
            maxWidth: '300px',
            maxHeight: '50vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            outline: 'none',
            border: `2px solid ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: (theme) => theme.palette.grey[500],
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Box sx={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}>
                {selectedImage && <Image src={selectedImage} alt="Faculty Head" width={300} height={300} style={{ width: '100%', height: 'auto', maxHeight: '40vh', objectFit: 'contain' }} />}
              </Box>
              <IconButton
                aria-label="download"
                onClick={handleDownload}
                className="download-icon"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'primary.main',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  transition: 'background-color 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                <DownloadIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
} 
