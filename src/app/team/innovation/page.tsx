"use client"

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Download as DownloadIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import Image from 'next/image';
import MemberGrid from '@/components/MemberGrid';

const cores = [
  {
    name: 'SHREEPAL',
    role: 'Innovation Core',
    image: '/technical-affairs-team/innovation/cores/Shreepal.webp',
    email: 'ec23b1107@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/shreepal29',
    roll: 'EC23B1107',
  },
];

const coordinators = [
  {
    name: 'M. AKSHARA',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1127.webp',
    email: 'ec24b1127@iiitdm.ac.in',
    linkedin: 'https://linkedin.com/in/akshara-muralikumar-0366b431b',
    roll: 'EC24B1127',
  },
  {
    name: 'Savinay.k',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1065.webp',
    email: 'ec24b1065@iiitdm.ac.in',
    linkedin: '',
    roll: 'EC24B1065',
  },
  {
    name: 'Lohith Chandra',
    image: '/technical-affairs-team/innovation/coordinators/EC24I1006.webp',
    email: 'ec24i1006@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/lohith-chandra-gogineni-4a2657370',
    roll: 'EC24I1006',
  },
  {
    name: 'G.Gouthami',
    image: '/technical-affairs-team/innovation/coordinators/CS24B1041.webp',
    email: 'cs24b1041@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/gouthami-gogineni-bb340b370',
    roll: 'CS24B1041',
  },
  {
    name: 'S. Aasritha Sri Varshini',
    image: '/technical-affairs-team/innovation/coordinators/EC24B1023.webp',
    email: 'ec24b1023@iiitdm.ac.in',
    linkedin: '',
    roll: 'EC24B1023',
  },
];

const sectionTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2rem' },
  color: 'primary.main',
  mb: 4,
};

const teamTitleStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
  color: 'primary.main',
  textAlign: 'center',
  mb: 2,
};

const teamDescription = 'The Innovation team fosters a culture of creativity and invention. We support students in developing their ideas, from concept to prototype, and connect them with resources and mentorship.';

export default function InnovationCore() {
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
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Innovation</Typography>
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
