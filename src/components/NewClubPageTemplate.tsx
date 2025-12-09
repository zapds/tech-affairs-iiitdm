"use client"

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  IconButton,
  Button,
  Modal,
  Backdrop,
  Fade,
  Chip,
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


import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

import { useThemeContext } from '../context/ThemeContext';
import ProjectCard from './ProjectCard';

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

interface Achievement {
  year: number;
  event: string;
  description: string;
  proof?: string;
}

interface Project {
  name: string;
  description: string;
  image?: string;
  members?: string[];
  technologies?: string[];
  themeColor?: string;
}

interface GalleryImage {
  src: string;
  caption: string;
}

interface NewClubPageTemplateProps {
  name: string;
  logo: string;
  introduction: string;
  timeline: Achievement[];
  projects: Project[];
  gallery: GalleryImage[];
  core: ClubMember[];
  links: ClubLinks;
}

function NewClubPageTemplate({ name, logo, introduction, timeline, projects, gallery, core, links }: NewClubPageTemplateProps) {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleProjectClose = () => {
    setProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = selectedImage.split('/').pop() || 'image';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
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

          {/* Title and Introduction on the right */}
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
                {introduction}
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

        {/* Timeline & Achievements Section */}
        <Box sx={{ my: 8 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: theme.palette.primary.main }}>
            Timeline & Achievements
            </Typography>
            <Box sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', bgcolor: theme.palette.divider } }}>
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', mb: 4 }}>
                            <Box sx={{ width: 'calc(50% - 20px)', bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: 1, position: 'relative', '&::after': { content: '""', position: 'absolute', top: '20px', right: index % 2 === 0 ? '-20px' : 'auto', left: index % 2 !== 0 ? '-20px' : 'auto', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: index % 2 === 0 ? '10px solid' : 'none', borderRight: index % 2 !== 0 ? '10px solid' : 'none', borderColor: theme.palette.background.paper } }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{item.year} - {item.event}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                            </Box>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>

        {/* Current Projects / Recently Conducted Events Section */}
        <Box sx={{ my: 8, py: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: theme.palette.primary.main }}>
            Current Projects / Recently Conducted Events
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ProjectCard
                            name={project.name}
                            image={project.image || ''}
                            description={project.description}
                            themeColor={project.themeColor}
                            isDarkMode={isDarkMode}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* Gallery Section */}
        <Box sx={{ my: 8 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: theme.palette.primary.main }}>
            Gallery
            </Typography>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={{ cursor: 'pointer' }} onClick={() => handleOpen(image.src)}>
                            <Image src={image.src} alt={image.caption} width={1280} height={720} style={{ width: '100%', height: 'auto', display: 'block' }} />
                            <Box sx={{ p: 1 }}>
                                <Typography variant="caption" color="text.secondary">{image.caption}</Typography>
                            </Box>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>

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

      {/* Project Details Modal */}
      <Modal
        open={projectModalOpen}
        onClose={handleProjectClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={projectModalOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', md: '60vw' },
            maxHeight: '90vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
            {selectedProject && (
              <>
                <IconButton
                  aria-label="close"
                  onClick={handleProjectClose}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography id="project-modal-title" variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {selectedProject.name}
                </Typography>
                {selectedProject.image && <Image src={selectedProject.image} alt={selectedProject.name} width={1280} height={720} style={{ width: '100%', height: 'auto', borderRadius: 8, marginBottom: 16 }} />}
                <Typography id="project-modal-description" sx={{ mb: 2 }}>
                  {selectedProject.description}
                </Typography>
                {selectedProject.members && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Team Members</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {selectedProject.members.map((member, i) => (
                        <Chip label={member} key={i} />
                      ))}
                    </Box>
                  </>
                )}
                {selectedProject.technologies && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Technologies Used</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {selectedProject.technologies.map((tech, i) => (
                        <Chip label={tech} key={i} color="primary" />
                      ))}
                    </Box>
                  </>
                )}
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default NewClubPageTemplate;
