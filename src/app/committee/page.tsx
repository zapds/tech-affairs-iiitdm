import React from "react";
import {
  Container,
  GridLegacy as Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  Instagram,
  LinkedIn,
  YouTube,
  Email,
} from "@mui/icons-material";
import Link from "next/link";

// Team member data
const teamData = {
  secretary: {
    name: "P Kaarthick Natesh",
    position: "Technical Affairs Secretary",
    image: "/technical-affairs-team/sac/PKaarthickNatesh.png",
    email: "ec22b1004@iiitdm.ac.in",
    linkedin: "",
  },
  jointSecretary: {
    name: "Ranveer Gautam",
    position: "Technical Affairs Joint Secretary",
    image: "/technical-affairs-team/sac/RanveerGautam.jpg",
    email: "me23b2031@iiitdm.ac.in",
    linkedin: "",
  },
};

const socialMediaLinks = {
  instagram: "https://www.instagram.com/iiitdm.technical/",
  linkedin: "https://www.linkedin.com/company/technical-affairs-iiitdm/",
  youtube: "https://www.youtube.com/@iiitdm.technical",
};

const facultyHeads = [
  {
    name: 'Dr.M D Selvaraj',
    role: 'Dean DII',
    image: '/facultyheads/selvaraj.png',
  },
  {
    name: 'Dr.Vikash Kumar',
    role: 'PIC- Technical Affairs',
    image: '/facultyheads/vikash.png',
  },
  {
    name: 'Dr.Bhukya Krishna Priya',
    role: 'PIC - Technical Affairs',
    image: '/facultyheads/krishnapriya.png',
  },
];

function Committee() {
  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
    },
    width: "100%",
    minWidth: "140px",
    maxWidth: "140px",
  };

  const imageStyle = {
    height: 160,
    objectFit: "cover",
    width: "100%",
  };

  const nameStyle = {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "0.8rem",
    },
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  };

  const descriptionStyle = {
    fontSize: {
      xs: "0.6rem",
      sm: "0.7rem",
      md: "0.8rem",
    },
    width: "100%",
    textAlign: "center",
    padding: "0 4px",
  };

  const titleStyle = {
    background: "linear-gradient(45deg, #1976d2, #9c27b0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      {/* Faculty Heads Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={titleStyle}
        >
          Faculty Heads
        </Typography>
        {/* Dean DII at the top */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ ...cardStyle, height: 'auto', minWidth: '180px', maxWidth: '180px' }}>
              <CardMedia
                component="img"
                image={facultyHeads[0].image}
                alt={facultyHeads[0].name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Box>
                  <Typography variant="h6" component="h3" sx={nameStyle}>
                    {facultyHeads[0].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {facultyHeads[0].role}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* PICs in the next row */}
        <Grid container spacing={2} justifyContent="center">
          {facultyHeads.slice(1).map((head) => (
            <Grid item xs={12} sm={6} md={4} key={head.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ ...cardStyle, height: 'auto', minWidth: '180px', maxWidth: '180px' }}>
                <CardMedia
                  component="img"
                  image={head.image}
                  alt={head.name}
                  sx={imageStyle}
                />
                <CardContent sx={{ py: 1, px: 1 }}>
                  <Box>
                    <Typography variant="h6" component="h3" sx={nameStyle}>
                      {head.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={descriptionStyle}
                    >
                      {head.role}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* SAC Technical Affairs Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={titleStyle}
        >
          SAC Technical Affairs
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Secretary */}
          <Grid
            item
            xs="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ ...cardStyle, height: 'auto', minWidth: '180px', maxWidth: '180px' }}>
              <CardMedia
                component="img"
                image={teamData.secretary.image}
                alt={teamData.secretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Box>
                  <Typography variant="h6" component="h3" sx={nameStyle}>
                    {teamData.secretary.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {teamData.secretary.position}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    href={`mailto:${teamData.secretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    href={teamData.secretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Joint Secretary */}
          <Grid
            item
            xs="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ ...cardStyle, height: 'auto', minWidth: '180px', maxWidth: '180px' }}>
              <CardMedia
                component="img"
                image={teamData.jointSecretary.image}
                alt={teamData.jointSecretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Box>
                  <Typography variant="h6" component="h3" sx={nameStyle}>
                    {teamData.jointSecretary.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {teamData.jointSecretary.position}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    href={`mailto:${teamData.jointSecretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    href={teamData.jointSecretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Core Team Navigation Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={titleStyle}
        >
          Teams
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          {[
            { label: 'Management', path: '/committee/management' },
            { label: 'Tech Development', path: '/committee/tech-development' },
            { label: 'Innovation', path: '/committee/innovation' },
            { label: 'Social Outreach', path: '/committee/social-outreach' },
            { label: 'Media and Marketing', path: '/committee/media-and-marketing' },
          ].map((team, idx) => (
            <Grid item xs={6} sm={6} md={2} key={team.label} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: { xs: 180, sm: 160 },
                  height: { xs: 170, sm: 130 },
                  minWidth: { xs: 180, sm: 160 },
                  minHeight: { xs: 170, sm: 130 },
                  maxWidth: { xs: 180, sm: 160 },
                  maxHeight: { xs: 170, sm: 130 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  p: 1.5,
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography 
                    variant="h6" 
                    align="center" 
                    sx={{ 
                      fontSize: { xs: '1.1rem', sm: '1rem' }, 
                      fontWeight: 700, 
                      letterSpacing: 1, 
                      color: 'primary.main',
                      textShadow: '0 1px 4px rgba(25, 118, 210, 0.15)'
                    }}
                  >
                    {team.label}
                  </Typography>
                </Box>
                <Link
                  className="team-view-btn"
                  style={{
                    alignSelf: 'center',
                    fontSize: '0.9em',
                    padding: '0.5em 1.2em',
                    minWidth: 0,
                    borderRadius: '0.5em',
                    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                    color: 'white',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
                    marginTop: '0.3em',
                    marginBottom: '0.3em',
                  }}
                  href={team.path}
                >
                  View Team
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={titleStyle}>
          Connect With Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            color="primary"
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href={socialMediaLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Committee;
