"use client"

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  GridLegacy as Grid,
  Card,
  Avatar,
  IconButton,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Download as DownloadIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import Image from 'next/image';

// Styled components
const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  width: '180px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: '140px',
  }
}));

interface ClubMember {
  name: string;
  role?: string;
  position?: string;
  image: string;
  email?: string;
  linkedin?: string;
  year?: string;
  department?: string;
  roll?: string;
}

interface ClubLinks {
  website?: string;
  instagram?: string;
  github?: string;
}

interface ClubPageTemplateProps {
  name: string;
  logo: string;
  description: string;
  core: ClubMember[];
  links: ClubLinks;
}

function ClubPageTemplate({ name, logo, description, core, links }: ClubPageTemplateProps) {
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
    <Box sx={{ py: 8, pt: { xs: 12, sm: 14, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section with Logo and Title */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          {/* Logo on the left */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              pt: { md: 4 },
              pb: { xs: 2, md: 0 },
              pr: { md: 4 },
              height: '100%'
            }}>
              <Image
                src={logo}
                alt={`${name} logo`}
                width={200}
                height={200}
                style={{
                  display: 'block',
                  objectFit: 'contain',
                  borderRadius: 0,
                  boxShadow: 'none',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} md={8}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'center' },
            }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                  fontWeight: 'bold',
                  mb: 3,
                  color: theme.palette.primary.main,
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  width: '100%', 
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  maxWidth: '800px',
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                {description}
              </Typography>
              {links?.website && (
                <Button
                  variant="contained"
                  color="primary"
                  href={links.website}
                  target="_blank"
                  size="medium"
                  sx={{
                    mt: 3,
                    background: theme.palette.primary.main,
                    color: 'white',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  Visit Website
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Core Team Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          Core Team
        </Typography>
        <Grid 
          container 
          spacing={2}
          justifyContent='center'
          sx={{
            mb: 8,
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {core && core.map((member) => (
            <Grid 
              item 
              xs={6} 
              sm={6} 
              md={3} 
              key={member.name} 
              sx={{
                display: 'flex', 
                justifyContent: 'center',
                width: { xs: '140px', sm: '180px' },
                flex: '0 0 auto'
              }}
            >
              <TeamMemberCard sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={() => handleOpen(member.image)}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    p: '4px',
                    background: theme.palette.mode === 'dark' ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : theme.palette.grey[200],
                    boxShadow: '0 0 12px rgba(0,0,0,0.2)',
                    mb: { xs: 0.75, sm: 1, md: 1.5 },
                    border: theme.palette.mode === 'light' ? `4px solid ${theme.palette.primary.main}` : 'none', // Added border for light theme
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: { xs: 70, sm: 90, md: 110 },
                      height: { xs: 70, sm: 90, md: 110 },
                      // border: `4px solid ${theme.palette.background.paper}`, // Removed this
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.2
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    mb: { xs: 0.5, sm: 0.5, md: 0.75 },
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.2
                  }}
                >
                  {member.role}
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
                <a href={`mailto:${member.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {member.email}
                </a>
                  {/* {member.email && (
                    <IconButton
                      component="a"
                      href={`mailto:${member.email}`}
                      color="primary"
                      size="small"
                      sx={{
                        padding: { xs: '3px', sm: '6px', md: '10px' }
                      }}
                    >
                      <EmailIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
                    </IconButton>
                  )}
                  {member.linkedin && (
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      color="primary"
                      size="small"
                      sx={{
                        padding: { xs: '3px', sm: '6px', md: '10px' }
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
                    </IconButton>
                  )} */}
                </Typography>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>

        {/* Links Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: theme.palette.primary.main,
            }}
          >
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {links?.website && (
              <IconButton
                component="a"
                href={links.website}
                target="_blank"
                color="primary"
                size="large"
              >
                <LanguageIcon />
              </IconButton>
            )}
            {links?.instagram && (
              <IconButton
                component="a"
                href={links.instagram}
                target="_blank"
                color="primary"
                size="large"
              >
                <InstagramIcon />
              </IconButton>
            )}
            {links?.github && (
              <IconButton
                component="a"
                href={links.github}
                target="_blank"
                color="primary"
                size="large"
              >
                <GitHubIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
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
    </Box>
  );
}

export default ClubPageTemplate;