"use client"

import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, Grid, Card, CardContent, Divider } from '@mui/material';
import { styled } from '@mui/system';

import { achievements, getUniqueClubs, getUniqueYears } from '@/data/achievements';

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(3),
  },
}));

const YearHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(6),
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Achievements = () => {
  const [selectedClub, setSelectedClub] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [groupedAchievements, setGroupedAchievements] = useState({});

  const clubs = ['all', ...getUniqueClubs()];
  const years = ['all', ...getUniqueYears()];

  useEffect(() => {
    let data = achievements;

    if (selectedClub !== 'all') {
      data = data.filter(ach => ach.club === selectedClub);
    }

    if (selectedYear !== 'all') {
      data = data.filter(ach => ach.year === selectedYear);
    }

    // Sort by year descending, then by ID descending
    data.sort((a, b) => {
      if (b.year !== a.year) {
        return parseInt(b.year, 10) - parseInt(a.year, 10);
      }
      return b.id - a.id;
    });

    // Group achievements by year
    const grouped = data.reduce((acc, achievement) => {
      const year = achievement.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(achievement);
      return acc;
    }, {});

    setGroupedAchievements(grouped);
  }, [selectedClub, selectedYear]);

  return (
    <Box sx={{ 
      padding: {
        xs: '120px 16px 48px 16px',
        sm: '96px 32px 48px 32px'
      },
      textAlign: 'center' 
    }}>
      <GradientTitle variant="h2">Achievements</GradientTitle>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 2, 
        marginBottom: 6,
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        alignItems: {
          xs: 'stretch',
          sm: 'center'
        }
      }}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            displayEmpty
          >
            {clubs.map((club) => (
              <MenuItem key={club} value={club}>
                {club === 'all' ? 'All Clubs/Teams' : club}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            displayEmpty
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {Object.entries(groupedAchievements)
          .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
          .map(([year, yearAchievements]) => (
            <Box key={year} sx={{ mb: 8 }}>
              <YearHeading variant="h4">
                {year}
              </YearHeading>
              <Divider sx={{ mb: 5 }} />
              <Grid 
                container 
                spacing={{ xs: 3, md: 4 }}
              >
                {yearAchievements.map((achievement) => (
                  <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    key={achievement.id}
                    sx={{
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <StyledCard>
                      <Box 
                        sx={{ 
                          width: { xs: '100%', sm: 100 },
                          height: 'auto',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 1,
                          mb: { xs: 1, sm: 0 }
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: 'auto',
                            maxHeight: { xs: 120, sm: 100 },
                            width: { xs: '80%', sm: '100%' },
                            objectFit: 'contain',
                          }}
                          alt={`${achievement.club} logo`}
                          src={achievement.logo}
                        />
                      </Box>
                      <CardContent sx={{ 
                        flexGrow: 1, 
                        textAlign: { xs: 'center', sm: 'left' },
                        pt: { xs: 0, sm: 2 }
                      }}>
                        <Typography 
                          variant="h6" 
                          component="div"
                          sx={{
                            fontSize: {
                              xs: '1.1rem',
                              sm: '1.25rem'
                            }
                          }}
                        >
                          {achievement.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{
                            fontSize: {
                              xs: '0.875rem',
                              sm: '1rem'
                            }
                          }}
                        >
                          {achievement.description}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          display="block" 
                          sx={{ 
                            mt: 1,
                            fontSize: {
                              xs: '0.75rem',
                              sm: '0.875rem'
                            }
                          }}
                        >
                          {achievement.club}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Achievements;
