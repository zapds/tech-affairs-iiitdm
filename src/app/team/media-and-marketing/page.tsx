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
    name: 'Satyam Kumar Pandey',
    role: 'Media and Marketing Core',
    image: '/technical-affairs-team/media-and-marketing/cores/SatyamKumarPandey.jpg',
    email: '',
    linkedin: '',
    roll: '',
  },
];

const coordinators = [
  {
    name: 'CS24B1023',
    image: '/technical-affairs-team/media-and-marketing/coordinators/CS24B1023.jpg',
    email: '',
    linkedin: '',
    roll: 'CS24B1023',
  },
  {
    name: 'CS24I1028',
    image: '/technical-affairs-team/media-and-marketing/coordinators/CS24I1028.jpg',
    email: '',
    linkedin: '',
    roll: 'CS24I1028',
  },
    {
    name: 'EC23B1091',
    image: '/technical-affairs-team/media-and-marketing/coordinators/EC23B1091.jpg',
    email: '',
    linkedin: '',
    roll: 'EC23B1091',
  },
  {
    name: 'ME23B1036',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME23B1036.jpg',
    email: '',
    linkedin: '',
    roll: 'ME23B1036',
  },
    {
    name: 'ME24B1052',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME24B1052.jpg',
    email: '',
    linkedin: '',
    roll: 'ME24B1052',
  },
  {
    name: 'ME24B1071',
    image: '/technical-affairs-team/media-and-marketing/coordinators/ME24B1071.jpg',
    email: '',
    linkedin: '',
    roll: 'ME24B1071',
  },
];

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

const teamDescription = 'The Media and Marketing team is the voice of the technical council. We manage our online presence, create engaging content, and promote our events and achievements to the world.';

export default function MediaAndMarketingCore() {
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
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Media and Marketing</Typography>
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
