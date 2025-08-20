"use client";

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  GridLegacy as Grid,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SelectChangeEvent } from '@mui/material/Select';

interface Equipment {
  equipment_id: number;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  status: string;
}

interface NewBookingProps {
  onBookingCreated: () => void;
}

export default function NewBooking({ onBookingCreated }: NewBookingProps) {
  const [formData, setFormData] = useState({
    department: '',
    project_name: '',
    intended_use: '',
    start_time: null as Date | null,
    end_time: null as Date | null,
    equipment_ids: [] as number[]
  });
  
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(false);
  const [equipmentLoading, setEquipmentLoading] = useState(true);
  const [successDialog, setSuccessDialog] = useState<{ open: boolean; bookingId: number | null }>({
    open: false,
    bookingId: null
  });
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch available equipment
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch('/i2r/api/equipment');
        if (response.ok) {
          const data = await response.json();
          setEquipment(data);
        } else {
          setSnackbar({
            open: true,
            message: 'Failed to fetch equipment',
            severity: 'error'
          });
        }
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Error fetching equipment',
          severity: 'error'
        });
      } finally {
        setEquipmentLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEquipmentChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      equipment_ids: typeof value === 'string' ? [] : value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validation
    if (!formData.department || !formData.project_name || !formData.intended_use || 
        !formData.start_time || !formData.end_time || formData.equipment_ids.length === 0) {
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

    if (formData.start_time < new Date()) {
      setSnackbar({
        open: true,
        message: 'Start time cannot be in the past',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/i2r/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          start_time: formData.start_time.toISOString(),
          end_time: formData.end_time.toISOString(),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessDialog({
          open: true,
          bookingId: result.booking_id
        });
        
        // Reset form
        setFormData({
          department: '',
          project_name: '',
          intended_use: '',
          start_time: null,
          end_time: null,
          equipment_ids: []
        });
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || 'Failed to create booking',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error creating booking',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialog({ open: false, bookingId: null });
    onBookingCreated();
  };

  if (equipmentLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Loading equipment...
        </Typography>
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="h6" gutterBottom>
        New Booking Request
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Department"
              value={formData.department}
              onChange={(e) => handleInputChange('department', e.target.value)}
              required
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Project Name"
              value={formData.project_name}
              onChange={(e) => handleInputChange('project_name', e.target.value)}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Intended Use"
              multiline
              rows={3}
              value={formData.intended_use}
              onChange={(e) => handleInputChange('intended_use', e.target.value)}
              required
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <DateTimePicker
              label="Start Time"
              value={formData.start_time}
              onChange={(newValue) => handleInputChange('start_time', newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  required: true
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <DateTimePicker
              label="End Time"
              value={formData.end_time}
              onChange={(newValue) => handleInputChange('end_time', newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  required: true
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Equipment</InputLabel>
              <Select
                multiple
                value={formData.equipment_ids}
                onChange={handleEquipmentChange}
                input={<OutlinedInput label="Equipment" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => {
                      const eq = equipment.find(e => e.equipment_id === value);
                      return (
                        <Chip 
                          key={value} 
                          label={eq ? `${eq.name} (${eq.category})` : `Equipment ${value}`}
                          size="small" 
                        />
                      );
                    })}
                  </Box>
                )}
              >
                {equipment.map((eq) => (
                  <MenuItem key={eq.equipment_id} value={eq.equipment_id}>
                    <Box>
                      <Typography variant="body1">{eq.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {eq.category} - {eq.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                type="button"
                variant="outlined"
                onClick={() => setFormData({
                  department: '',
                  project_name: '',
                  intended_use: '',
                  start_time: null,
                  end_time: null,
                  equipment_ids: []
                })}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Submitting...' : 'Submit Booking Request'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Success Dialog */}
      <Dialog open={successDialog.open} onClose={handleSuccessDialogClose}>
        <DialogTitle>Booking Request Submitted</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Your booking request has been successfully submitted!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Booking ID: {successDialog.bookingId}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Your request is now pending admin approval. You will be notified once it's reviewed.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogClose} variant="contained">
            View My Bookings
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