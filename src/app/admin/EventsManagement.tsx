"use client";

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  GridLegacy as Grid,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Chip
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Add, Edit, Delete, Upload } from '@mui/icons-material';
import { format } from 'date-fns';
import Image from 'next/image';

interface Club {
  club_id: number;
  name: string;
  iconUrl: string;
}

interface Event {
  event_id: number;
  club_id: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  link: string;
  requirements: string;
  imageUrl?: string;
  club_name?: string;
}

export default function EventsManagement() {
  const [events, setEvents] = useState<Event[]>([]);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState<{
    open: boolean;
    mode: 'add' | 'edit';
    event: Event | null;
  }>({
    open: false,
    mode: 'add',
    event: null
  });
  const [formData, setFormData] = useState({
    club_id: '',
    name: '',
    description: '',
    start_time: null as Date | null,
    end_time: null as Date | null,
    location: '',
    link: '',
    requirements: '',
    imageUrl: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const fetchEvents = async () => {
    try {
      const response = await fetch('/admin/api/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        setSnackbar({
          open: true,
          message: 'Failed to fetch events',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error fetching events',
        severity: 'error'
      });
    }
  };

  const fetchClubs = async () => {
    try {
      const response = await fetch('/admin/api/clubs');
      if (response.ok) {
        const data = await response.json();
        setClubs(data);
      }
    } catch (error) {
      console.error('Error fetching clubs:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchEvents(), fetchClubs()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleAdd = () => {
    setFormData({
      club_id: '',
      name: '',
      description: '',
      start_time: null,
      end_time: null,
      location: '',
      link: '',
      requirements: '',
      imageUrl: ''
    });
    setImageFile(null);
    setDialog({
      open: true,
      mode: 'add',
      event: null
    });
  };

  const handleEdit = (event: Event) => {
    setFormData({
      club_id: event.club_id.toString(),
      name: event.name,
      description: event.description,
      start_time: new Date(event.start_time),
      end_time: new Date(event.end_time),
      location: event.location,
      link: event.link,
      requirements: event.requirements,
      imageUrl: event.imageUrl || ''
    });
    setImageFile(null);
    setDialog({
      open: true,
      mode: 'edit',
      event
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const response = await fetch(`/admin/api/events?event_id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Event deleted successfully',
          severity: 'success'
        });
        fetchEvents();
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || 'Failed to delete event',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error deleting event',
        severity: 'error'
      });
    }
  };

  const handleImageUpload = async (eventId: number) => {
    if (!imageFile) return null;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('eventId', eventId.toString());

      const response = await fetch('/admin/api/upload/event', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.description || !formData.club_id || 
        !formData.start_time || !formData.end_time || !formData.location) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    if (formData.start_time >= formData.end_time) {
      setSnackbar({
        open: true,
        message: 'End time must be after start time',
        severity: 'error'
      });
      return;
    }

    try {
      let response;
      let eventId = dialog.event?.event_id;

      const eventData = {
        club_id: parseInt(formData.club_id),
        name: formData.name,
        description: formData.description,
        start_time: formData.start_time.toISOString(),
        end_time: formData.end_time.toISOString(),
        location: formData.location,
        link: formData.link || '',
        requirements: formData.requirements || ''
      };

      // First create/update the event
      if (dialog.mode === 'add') {
        response = await fetch('/admin/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventData)
        });
        
        if (response.ok) {
          const data = await response.json();
          eventId = data.event.event_id;
        }
      } else {
        response = await fetch('/admin/api/events', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event_id: dialog.event!.event_id,
            ...eventData
          })
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${dialog.mode} event`);
      }

      // Upload image if provided
      if (imageFile && eventId) {
        try {
          const finalImageUrl = await handleImageUpload(eventId);
          
          // Update event with new image URL
          await fetch('/admin/api/events', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              event_id: eventId,
              imageUrl: finalImageUrl
            })
          });
        } catch (uploadError) {
          console.error('Error uploading image:', uploadError);
          // Continue without image if upload fails
        }
      }

      setSnackbar({
        open: true,
        message: `Event ${dialog.mode === 'add' ? 'added' : 'updated'} successfully`,
        severity: 'success'
      });
      setDialog({ open: false, mode: 'add', event: null });
      fetchEvents();
    } catch (error) {
      setSnackbar({
        open: true,
        message: error instanceof Error ? error.message : `Error ${dialog.mode === 'add' ? 'adding' : 'updating'} event`,
        severity: 'error'
      });
    }
  };

  const handleDialogClose = () => {
    setDialog({ open: false, mode: 'add', event: null });
    setImageFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const getClubName = (clubId: number) => {
    const club = clubs.find(c => c.club_id === clubId);
    return club ? club.name : 'Unknown Club';
  };

  const getEventStatus = (startTime: string, endTime: string) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now < start) {
      return { label: 'Upcoming', color: 'info' as const };
    } else if (now >= start && now <= end) {
      return { label: 'Ongoing', color: 'success' as const };
    } else {
      return { label: 'Completed', color: 'default' as const };
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Events Management</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAdd}
        >
          Add Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        {events.map((event) => {
          const status = getEventStatus(event.start_time, event.end_time);
          return (
            <Grid item xs={12} sm={6} md={4} key={event.event_id}>
              <Card>
                {event.imageUrl && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={event.imageUrl}
                    alt={event.name}
                    sx={{ objectFit: 'cover' }}
                  />
                )}
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="start" mb={1}>
                    <Typography variant="h6" component="div">
                      {event.name}
                    </Typography>
                    <Chip label={status.label} color={status.color} size="small" />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {getClubName(event.club_id)}
                  </Typography>
                  
                  <Typography variant="body2" gutterBottom>
                    {event.description}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>Location:</strong> {event.location}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>Start:</strong> {format(new Date(event.start_time), 'MMM dd, yyyy HH:mm')}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>End:</strong> {format(new Date(event.end_time), 'MMM dd, yyyy HH:mm')}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => handleDelete(event.event_id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Add/Edit Event Dialog */}
      <Dialog open={dialog.open} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialog.mode === 'add' ? 'Add New Event' : 'Edit Event'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Club</InputLabel>
                <Select
                  value={formData.club_id}
                  label="Club"
                  onChange={(e) => setFormData(prev => ({ ...prev, club_id: e.target.value }))}
                >
                  {clubs.map((club) => (
                    <MenuItem key={club.club_id} value={club.club_id.toString()}>
                      {club.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DateTimePicker
                label="Start Time"
                value={formData.start_time}
                onChange={(newValue) => setFormData(prev => ({ ...prev, start_time: newValue }))}
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DateTimePicker
                label="End Time"
                value={formData.end_time}
                onChange={(newValue) => setFormData(prev => ({ ...prev, end_time: newValue }))}
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Link (Optional)"
                value={formData.link}
                onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Requirements (Optional)"
                multiline
                rows={2}
                value={formData.requirements}
                onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Event Image
                </Typography>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="event-image-upload"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="event-image-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<Upload />}
                    disabled={uploading}
                  >
                    {imageFile ? imageFile.name : 'Upload Image'}
                  </Button>
                </label>
                {uploading && <CircularProgress size={20} sx={{ ml: 2 }} />}
              </Box>

              {(formData.imageUrl || imageFile) && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Preview:
                  </Typography>
                  <Image
                    src={imageFile ? URL.createObjectURL(imageFile) : formData.imageUrl}
                    alt="Preview"
                    style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" disabled={uploading}>
            {dialog.mode === 'add' ? 'Add' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}
