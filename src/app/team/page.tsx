"use client";

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
import { useTheme } from "@mui/material/styles";
import {
  Instagram,
  LinkedIn,
  YouTube,
  Email,
} from "@mui/icons-material";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";

// Team member data
const teamData = {
  secretary: {
    name: "P Kaarthick Natesh",
    position: "Technical Affairs Secretary",
    image: "/technical-affairs-team/sac/PKaarthickNatesh.jpg",
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
    name: 'Prof. M D Selvaraj',
    role: 'Dean DII',
    image: '/facultyheads/selvaraj.png',
  },
  {
    name: 'Dr. Vikash Kumar',
    role: 'PIC - Technical Affairs',
    image: '/facultyheads/vikash.png',
  },
  {
    name: 'Dr. Bhukya Krishna Priya',
    role: 'PIC - Technical Affairs',
    image: '/facultyheads/krishnapriya.png',
  },
];


const clubs = [
  { name: "CS Club", image: "/clubs/csclub/logo.png", link: "/clubs/cs" },
  { name: "Developer's Club", image: "/clubs/devclub/logo.jpg", link: "/clubs/dev" },
  { name: "System Coding Club", image: "/clubs/Scc/logo.png", link: "/clubs/scc" },
  { name: "Robotics", image: "/clubs/robotics/logo.png", link: "/clubs/robotics" },
];

const teams = [
  { name: "MaRS (Shunya)", image: "/teams/mars/logo.png", link: "/teams/shunya" },
  { name: "AUV (Nira)", image: "/teams/nira/logo.jpg", link: "/teams/nira" },
  { name: "Revolt Racers", image: "/teams/revolt/logo.png", link: "/teams/revolt" },
  { name: "Astra", image: "/teams/astra/logo.png", link: "/teams/astra" },
  { name: "TAD", image: "/teams/tad/logo.png", link: "/teams/tad" },
];

const societies = [
  { name: "E-Cell", image: "/societies/Ecell/logo.png", link: "/societies/ecell" },
  { name: "IEEE", image: "/societies/IEEE/logo.png", link: "/societies/ieee" },
  { name: "Optica Student Chapter", image: "/societies/OpticaStudentChapter/logo.jpg", link: "/societies/optica" },
  { name: "ASME Student Section", image: "/societies/ASMEStudentSection/logo.png", link: "/societies/asme" },
];

const communities = [
  { name: "Cybersecurity", image: "/communities/Cybersecurity/logo.png", link: "/communities/cybersecurity" },
  { name: "Game Developers", image: "/communities/gamedevelopers/logo.png", link: "/communities/gamedevelopers" },
];

const tabOptions = [
  { label: "Clubs", data: clubs, route: "clubs" },
  { label: "Teams", data: teams, route: "teams" },
  { label: "Societies", data: societies, route: "societies" },
  { label: "Communities", data: communities, route: "communities" },
];

const TeamCard = styled(Card)(({ theme }) => ({
  width: 140,
  height: 180,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: theme.shadows[2],
  borderRadius: 12,
  background: theme.palette.background.paper,
  border: `1.5px solid ${theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[200]
    }`,
  transition: "transform 0.18s, box-shadow 0.18s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px) scale(1.03)",
    boxShadow: theme.shadows[6],
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    width: 130,
    height: 160,
  },
}));

function Council() {
  const pathname = usePathname();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  // Get tab index from current path
  const getTabFromPath = useCallback(() => {
    const parts = pathname.split("/");
    if (parts.length >= 3) {
      const idx = tabOptions.findIndex(
        (opt) => opt.route === parts[2].toLowerCase()
      );
      return idx !== -1 ? idx : 0;
    }
    return 0;
  }, [pathname]);

  const [tab, setTab] = useState(getTabFromPath());

  // Sync tab when pathname changes
  useEffect(() => {
    setTab(getTabFromPath());
  }, [getTabFromPath]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    // router.push(`/council/${tabOptions[newValue].route}`);
  };

  const currentList = tabOptions[tab].data;

  // Tabs responsive settings
  const tabsVariant: "fullWidth" | "scrollable" | "standard" = isXs ? "scrollable" : "fullWidth";
  const scrollButtons = isXs;

  return (
    <Box
      sx={{
        // mt: { xs: 7, md: 9 },
        py: { xs: 7, md: 9 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            color: theme.palette.primary.main,
            textShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Our Family
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant={tabsVariant}
          scrollButtons={scrollButtons}
          allowScrollButtonsMobile
          sx={{
            mb: 3,
            borderRadius: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            minHeight: 36,
            mx: "auto",
            width: "100%",
            "& .MuiTabs-indicator": {
              background: theme.palette.primary.main,
              height: 3,
              borderRadius: 2,
            },
          }}
        >
          {tabOptions.map((option) => (
            <Tab
              key={option.label}
              label={option.label}
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "0.95rem" },
                color: "text.secondary",
                minHeight: 36,
                px: { xs: 0.5, sm: 2 },
                transition: "color 0.2s",
                "&.Mui-selected": {
                  color: "primary.main",
                },
              }}
            />
          ))}
        </Tabs>

        {/* Cards */}
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {currentList.map((item) => (
            <Grid
              item
              key={item.name}
              xs={6}
              sm={4}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              <Link href={item.link} passHref>
                <TeamCard
                  tabIndex={0}
                  role="button"
                  aria-label={item.name}
                >
                  <Box
                    sx={{
                      width: { xs: 70, sm: 85 },
                      height: { xs: 70, sm: 85 },
                      mb: 1,
                      bgcolor: (theme) => theme.palette.background.default,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: (theme) => theme.shadows[1],
                      overflow: "hidden",
                      p: 1,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontSize: "1rem",
                      mb: 0,
                      wordBreak: "break-word",
                      maxWidth: "100%",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.name}
                  </Typography>
                </TeamCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


function Committee() {
  const theme = useTheme();
  
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
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Council />
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

        {/* First head (Dean) */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <Grid
            item
            xs="auto"
            key={facultyHeads[0].name}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                ...cardStyle,
                height: "auto",
                minWidth: "180px",
                maxWidth: "180px",
              }}
            >
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

        {/* Remaining heads */}
        <Grid container spacing={2} justifyContent="center">
          {facultyHeads.slice(1).map((head) => (
            <Grid
              item
              xs="auto"
              key={head.name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  ...cardStyle,
                  height: "auto",
                  minWidth: "180px",
                  maxWidth: "180px",
                }}
              >
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
                {teamData.secretary.email ? (
                  <a href={`mailto:${teamData.secretary.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                    {teamData.secretary.email}
                  </a>
                ) : (teamData.secretary.position)}
              </Typography>
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
                  {teamData.jointSecretary.email ? (
                    <a href={`mailto:${teamData.jointSecretary.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {teamData.jointSecretary.email}
                    </a>
                  ) : (teamData.jointSecretary.position)}
                </Typography>
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
            { label: 'Management', path: '/team/management' },
            { label: 'Tech Development', path: '/team/tech-development' },
            { label: 'Innovation', path: '/team/innovation' },
            { label: 'Social Outreach', path: '/team/social-outreach' },
            { label: 'Media and Marketing', path: '/team/media-and-marketing' },
          ].map((team) => (
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
                    color: '#3275AA',
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
