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
    name: 'S M Jawhra',
    role: 'Management Core',
    image: '/technical-affairs-team/management/cores/SMJawhra.webp',
    email: 'cs23b1053@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/s-m-jawhra-2150902b7',
    roll: 'CS23B1053',
  },
  {
    name: 'Dharun Thota',
    role: 'Management Core',
    image: '/technical-affairs-team/management/cores/DharunThota.webp',
    email: 'cs22b1083@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/dharun-thota-742915264/',
    roll: 'CS22B1083',
  },
];

const coordinators = [
  {
    name: 'G S Raghava Ram',
    image: '/technical-affairs-team/management/coordinators/CS24I1005.webp',
    email: 'cs24i1005@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/g-sangeeth-raghava-ram-a87431323',
    roll: 'CS24I1005',
  },
  {
    name: 'Roshini',
    image: '/technical-affairs-team/management/coordinators/CS24B1020.webp',
    email: 'cs24b1020@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/roshini',
    roll: 'CS24B1020',
  },
  {
    name: 'Nithin M',
    image: '/technical-affairs-team/management/coordinators/EC24B1016.webp',
    email: 'ec24b1016@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/nithin-satya-sai-ram-maddala-59078431b',
    roll: 'EC24B1016',
  },
  {
    name: 'MONISH KUMAR R',
    image: '/technical-affairs-team/management/coordinators/EC24B1051.webp',
    email: 'ec24b1051@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/monish-kumar-r01',
    roll: 'EC24B1051',
  },
  {
    name: 'Adithya Ajay',
    image: '/technical-affairs-team/management/coordinators/EC24B1099.webp',
    email: 'ec24b1099@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/adithya-ajay-2b92aa370/',
    roll: 'EC24B1099',
  },
  {
    name: 'Gautam Devaraj',
    image: '/technical-affairs-team/management/coordinators/EC24B1039.webp',
    email: 'ec24b1039@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/gautam-devaraj-0332b7370/',
    roll: 'EC24B1039',
  },
  {
    name: 'Suranjana Mary',
    image: '/technical-affairs-team/management/coordinators/ME24B1016.webp',
    email: 'me24b1016@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/suranjana-mary-12646736a',
    roll: 'ME24B1016',
  },
  {
    name: 'Keerthan S',
    image: '/technical-affairs-team/management/coordinators/ME24B1006.webp',
    email: 'me24b1006@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/keerthan-santha-kumar-428539304',
    roll: 'ME24B1006',
  },
  {
    name: 'Bhavana sri',
    image: '/technical-affairs-team/management/coordinators/CS24I1034.webp',
    email: 'cs24i1034@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/bhavana-sri-28233836a',
    roll: 'CS24I1034',
  },
  {
    name: 'S Yagnesh',
    image: '/technical-affairs-team/management/coordinators/EC24B1103.webp',
    email: 'ec24b1103@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/s-yagnesh-529112324',
    roll: 'EC24B1103',
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

const teamDescription = 'The Management team is responsible for planning, organizing, and overseeing events and activities. We ensure smooth execution and effective coordination among all stakeholders.';

export default function ManagementCore() {
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
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Management</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>{teamDescription}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Cores</Typography>
        <MemberGrid members={cores} handleOpen={handleOpen} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={sectionTitleStyle}>Coordinators</Typography>
        <MemberGrid members={coordinators} handleOpen={handleOpen} />
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

