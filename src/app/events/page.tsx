import { db } from '@/db';
import { Events, Clubs } from '@/db/schema';
import { eq } from 'drizzle-orm';
import EventsClient from './EventsClient';
import { Box, Typography } from '@mui/material';

// Define the type for our joined data
export type EventWithClub = {
    name: string;
    description: string;
    image: string;
    location: string;
    date: string;
    timings: string;
    requirements: string;
    club: string;
    link: string;
    clubLogo: string;
};


async function getEventsData(): Promise<EventWithClub[]> {
    const data = await db
        .select({
            event_name: Events.name,
            description: Events.description,
            imageUrl: Events.imageUrl,
            location: Events.location,
            start_time: Events.start_time,
            requirements: Events.requirements,
            link: Events.link,
            club_name: Clubs.name,
            club_iconUrl: Clubs.iconUrl,
        })
        .from(Events)
        .leftJoin(Clubs, eq(Events.club_id, Clubs.club_id));

    // Format the data to match the structure needed by the client component
    return data.map(item => {
        const eventDate = new Date(item.start_time);
        return {
            name: item.event_name,
            description: item.description,
            image: item.imageUrl ?? '/default-event-image.png', // Fallback image
            location: item.location,
            date: eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            timings: eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
            requirements: item.requirements,
            club: item.club_name ?? 'Unknown Club', // Fallback club name
            link: item.link ?? '#', // Fallback link
            clubLogo: item.club_iconUrl ?? '/default-club-logo.png', // Fallback logo
        };
    });
}

export default async function EventsPage() {
    const events = await getEventsData();

    return (
        <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, px: { xs: 2, sm: 4 } }}>
            <Typography variant="h3" component="h1" fontWeight="bold" textAlign="center" gutterBottom>
                Upcoming Events
            </Typography>
            {events.length > 0 ? (
                <EventsClient events={events} />
            ) : (
                <Typography textAlign="center" mt={4}>No upcoming events found.</Typography>
            )}
        </Box>
    );
}
