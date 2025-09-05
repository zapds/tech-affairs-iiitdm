'use client';

import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    GridLegacy as Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Avatar,
} from '@mui/material';
import {
    CalendarToday as CalendarIcon,
    AccessTime as ClockIcon,
    LocationOn as MapPinIcon,
    VpnKey as UserLockIcon, // A suitable replacement for UserLockIcon
    Link as LinkIcon,
    Share as ShareIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { type EventWithClub } from './page'; // Import the type from the server component

export default function EventsClient({ events }: { events: EventWithClub[] }) {
    const [filterClubName, setFilterClubName] = React.useState<string>("");
    const [filteredEvents, setFilteredEvents] = React.useState<EventWithClub[]>([...events]);

    // Create a unique list of clubs for the filter dropdown
    const uniqueClubs = React.useMemo(() => {
        const clubs = new Map<string, string>();
        events.forEach(event => {
            if (!clubs.has(event.club)) {
                clubs.set(event.club, event.clubLogo);
            }
        });
        return Array.from(clubs.entries());
    }, [events]);

    // Effect to filter events when the selected club changes
    React.useEffect(() => {
        if (filterClubName) {
            setFilteredEvents(events.filter(event => event.club === filterClubName));
        } else {
            setFilteredEvents([...events]); // Reset to all events if filter is cleared
        }
    }, [filterClubName, events]);

    const handleShare = async (event: EventWithClub) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: event.name,
                    text: `${event.name}\n${event.date} at ${event.timings}\n${event.location}\n\n${event.description}`,
                    url: event.link,
                });
            } catch (err) {
                console.error("Share failed:", err);
            }
        } else {
            alert("Sharing is not supported on this device.");
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="club-filter-label">Filter by club</InputLabel>
                    <Select
                        labelId="club-filter-label"
                        id="club-filter"
                        value={filterClubName}
                        label="Filter by club"
                        onChange={(e) => setFilterClubName(e.target.value as string)}
                    >
                        <MenuItem value="">
                            <em>All Clubs</em>
                        </MenuItem>
                        {uniqueClubs.map(([clubName, clubLogo]) => (
                            <MenuItem key={clubName} value={clubName}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Avatar src={clubLogo} alt={clubName} sx={{ width: 24, height: 24 }} />
                                    {clubName}
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={3} justifyContent="center">
                {filteredEvents.map((event, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={4}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 4 }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 'auto',
                                    aspectRatio: '16/9', // Maintain aspect ratio
                                }}
                                image={event.image}
                                alt={event.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                                    {event.name}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                    <Avatar src={event.clubLogo} alt={event.club} sx={{ width: 28, height: 28 }} />
                                    <Typography variant="subtitle1" fontWeight="medium">{event.club}</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line', mb: 3 }}>
                                    {event.description}
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <InfoItem icon={<CalendarIcon fontSize="small" />} text={event.date} />
                                    <InfoItem icon={<ClockIcon fontSize="small" />} text={event.timings} />
                                    <InfoItem icon={<MapPinIcon fontSize="small" />} text={event.location} />
                                    <InfoItem icon={<UserLockIcon fontSize="small" />} text={event.requirements} />
                                </Box>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    startIcon={<LinkIcon />}
                                    component={Link}
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Event
                                </Button>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<ShareIcon />}
                                    onClick={() => handleShare(event)}
                                >
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

// Helper component for list items with icons
const InfoItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {icon}
        <Typography variant="body2" color="text.secondary">{text}</Typography>
    </Box>
);
