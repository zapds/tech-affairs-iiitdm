"use client";

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';
import { format } from 'date-fns';

interface Equipment {
  name: string;
  category: string;
}

interface Booking {
  booking_id: number;
  project_name: string;
  department: string;
  intended_use: string;
  start_time: string;
  end_time: string;
  status: 'P' | 'A' | 'R';
  created_at: string;
  comments: string;
  equipment: Equipment[];
}

export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelDialog, setCancelDialog] = useState<{ open: boolean; bookingId: number | null }>({
    open: false,
    bookingId: null
  });
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const fetchBookings = async () => {
    try {
      const response = await fetch('/i2r/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'P':
        return <Chip label="Pending" color="warning" size="small" />;
      case 'A':
        return <Chip label="Approved" color="success" size="small" />;
      case 'R':
        return <Chip label="Rejected" color="error" size="small" />;
      default:
        return <Chip label="Unknown" color="default" size="small" />;
    }
  };

  const handleCancelBooking = async () => {
    if (!cancelDialog.bookingId) return;

    try {
      const response = await fetch('/i2r/api/bookings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booking_id: cancelDialog.bookingId,
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Booking cancelled successfully',
          severity: 'success'
        });
        fetchBookings(); // Refresh the list
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || 'Failed to cancel booking',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error cancelling booking',
        severity: 'error'
      });
    } finally {
      setCancelDialog({ open: false, bookingId: null });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (bookings.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="text.secondary">
          No bookings found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Create your first booking using the "New Booking" tab
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        My Bookings
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Equipment</TableCell>
              <TableCell>Time Range</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.booking_id}>
                <TableCell>{booking.booking_id}</TableCell>
                <TableCell>{booking.project_name}</TableCell>
                <TableCell>{booking.department}</TableCell>
                <TableCell>
                  {booking.equipment.map((eq, index) => (
                    <Box key={index} mb={0.5}>
                      <Typography variant="body2" fontWeight="medium">
                        {eq.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {eq.category}
                      </Typography>
                    </Box>
                  ))}
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {format(new Date(booking.start_time), 'MMM dd, yyyy HH:mm')}
                  </Typography>
                  <Typography variant="body2">
                    to {format(new Date(booking.end_time), 'MMM dd, yyyy HH:mm')}
                  </Typography>
                </TableCell>
                <TableCell>{getStatusChip(booking.status)}</TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {booking.comments || '-'}
                  </Typography>
                </TableCell>
                <TableCell>
                  {booking.status === 'P' && (
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => setCancelDialog({ open: true, bookingId: booking.booking_id })}
                    >
                      Cancel
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cancel Confirmation Dialog */}
      <Dialog
        open={cancelDialog.open}
        onClose={() => setCancelDialog({ open: false, bookingId: null })}
      >
        <DialogTitle>Cancel Booking</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel this booking? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCancelDialog({ open: false, bookingId: null })}>
            No, Keep Booking
          </Button>
          <Button onClick={handleCancelBooking} color="error" variant="contained">
            Yes, Cancel Booking
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
    </>
  );
}
