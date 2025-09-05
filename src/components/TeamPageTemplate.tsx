'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  GridLegacy as Grid,
  Card,
  Avatar,
  IconButton,
  CardMedia,
  Button,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  width: '180px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: '140px',
  }
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '700px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '100%',
    background: `linear-gradient(to bottom, 
      ${theme.palette.primary.main}40,
      ${theme.palette.primary.main},
      ${theme.palette.primary.main}40)`,
  }
}));

const TimelineItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'side',
})<{ side: 'left' | 'right' }>(({ theme, side }) => ({
  position: 'relative',
  width: '50%',
  marginBottom: theme.spacing(4),
  padding: side === 'left' ? '0 40px 0 0' : '0 0 0 40px',
  alignSelf: side === 'left' ? 'flex-start' : 'flex-end',
  textAlign: side === 'left' ? 'right' : 'left',
  '&:last-child': {
    marginBottom: 0
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '12px',
    [side === 'left' ? 'right' : 'left']: '-9px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: theme.palette.background.paper,
    border: `4px solid ${theme.palette.primary.main}`,
    boxShadow: `0 0 0 4px ${theme.palette.primary.main}30`,
    zIndex: 1,
  }
}));

const EventCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{ highlight?: boolean }>(({ theme, highlight }) => ({
  padding: theme.spacing(2.5),
  backgroundColor: highlight 
    ? theme.palette.mode === 'dark'
      ? 'rgba(25, 118, 210, 0.08)'
      : 'rgba(25, 118, 210, 0.04)'
    : theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(0, 0, 0, 0.01)',
  border: highlight ? `1px solid ${theme.palette.primary.main}40` : 'none',
  borderRadius: '12px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  '&:last-child': {
    marginBottom: 0
  },
  position: 'relative',
}));

const EventYear = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1.5),
  right: theme.spacing(1.5),
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  opacity: 0.8
}));

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
  year?: string;
  department?: string;
  roll?: string;
}

interface Achievement {
  title: string;
  description: string;
  year: string;
  highlight?: boolean;
}

interface TeamPageTemplateProps {
  name: string;
  club: string;
  logo: string;
  description: string;
  achievements: Achievement[];
  members: TeamMember[];
  website: string;
}

function TeamPageTemplate({ name, club, logo, description, achievements, members, website }: TeamPageTemplateProps) {
  const theme = useTheme();
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
              <CardMedia
                component="img"
                image={logo}
                alt={`${name} Logo`}
                sx={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: 0, 
                  boxShadow: 0, 
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
              textAlign: { xs: 'center', md: 'center' }
            }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#3275AA',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  width: '100%', 
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                {name}
              </Typography>
              {club && (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {club}
                </Typography>
              )}
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
              {website && (
                <Button
                  variant="contained"
                  color="primary"
                  href={website}
                  target="_blank"
                  size="medium"
                  sx={{
                    mt: 3,
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

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 5,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#3275AA',
              }}
            >
              Our Journey
            </Typography>
            <TimelineContainer>
              {achievements.map((event, eventIndex) => (
                <TimelineItem 
                  key={event.title + event.year + eventIndex}
                  side={eventIndex % 2 === 0 ? 'left' : 'right'}
                >
                  <EventCard
                    highlight={event.highlight}
                    elevation={0}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: event.highlight ? 'primary.main' : 'text.primary',
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.1rem',
                        lineHeight: 1.3,
                        textAlign: 'left'
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                        textAlign: 'left'
                      }}
                    >
                      {event.description}
                    </Typography>
                    <EventYear>{event.year}</EventYear>
                  </EventCard>
                </TimelineItem>
              ))}
            </TimelineContainer>
            <Box sx={{ height: '40px' }} />
          </>
        )}
        {/* Team Members Section */}
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
          Team Members
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
          {members && members.map((member) => (
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
              <TeamMemberCard>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 70, sm: 90, md: 110 },
                    height: { xs: 70, sm: 90, md: 110 },
                    mb: { xs: 0.75, sm: 1, md: 1.5 }
                  }}
                />
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
                {member.roll && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                      width: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: 1.2
                    }}
                  >
                    {member.roll}
                  </Typography>
                )}
                <Box sx={{ 
                  mt: { xs: 0.75, sm: 1, md: 1.5 },
                  display: 'flex',
                  gap: { xs: 0.4, sm: 0.6, md: 0.8 },
                  justifyContent: 'center'
                }}>
                  {member.email && (
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
                  )}
                </Box>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TeamPageTemplate; 
