"use client";

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  GridLegacy as Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { format } from 'date-fns';

interface Equipment {
  equipment_id: number;
  name: string;
  category: string;
}

interface Booking {
  booking_id: number;
  user_id: number;
  department: string;
  project_name: string;
  intended_use: string;
  start_time: string;
  end_time: string;
  status: string;
  created_at: string;
  comments: string;
  user: {
    name: string;
    email: string;
  };
  equipment: Equipment[];
}

export default function PendingRequests() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionDialog, setActionDialog] = useState<{
    open: boolean;
    booking: Booking | null;
    action: 'approve' | 'reject';
    reason: string;
  }>({
    open: false,
    booking: null,
    action: 'approve',
    reason: ''
  });
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const fetchPendingBookings = async () => {
    try {
      const response = await fetch('/i2r/api/admin/bookings?type=pending');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        setSnackbar({
          open: true,
          message: 'Failed to fetch pending bookings',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error fetching pending bookings',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingBookings();
  }, []);

  const handleAction = (booking: Booking, action: 'approve' | 'reject') => {
    setActionDialog({
      open: true,
      booking,
      action,
      reason: action === 'approve' ? 'Approved by admin' : ''
    });
  };

  const handleSubmitAction = async () => {
    if (!actionDialog.booking) return;

    if (actionDialog.action === 'reject' && !actionDialog.reason.trim()) {
      setSnackbar({
        open: true,
        message: 'Please provide a reason for rejection',
        severity: 'error'
      });
      return;
    }

    try {
      const response = await fetch('/i2r/api/admin/bookings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          booking_id: actionDialog.booking.booking_id,
          action: actionDialog.action,
          reason: actionDialog.reason
        })
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: `Booking ${actionDialog.action}d successfully`,
          severity: 'success'
        });
        setActionDialog({
          open: false,
          booking: null,
          action: 'approve',
          reason: ''
        });
        fetchPendingBookings(); // Refresh the list
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || `Failed to ${actionDialog.action} booking`,
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: `Error ${actionDialog.action}ing booking`,
        severity: 'error'
      });
    }
  };

  const handleDialogClose = () => {
    setActionDialog({
      open: false,
      booking: null,
      action: 'approve',
      reason: ''
    });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (bookings.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="text.secondary">
          No pending booking requests
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All booking requests have been processed
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Pending Booking Requests ({bookings.length})
      </Typography>
      
      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid item xs={12} md={6} lg={4} key={booking.booking_id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" component="div">
                    Booking #{booking.booking_id}
                  </Typography>
                  <Chip label="Pending" color="warning" size="small" />
                </Box>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>User:</strong> {booking.user.name} ({booking.user.email})
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Department:</strong> {booking.department}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Project:</strong> {booking.project_name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Purpose:</strong> {booking.intended_use}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Time:</strong><br />
                  {format(new Date(booking.start_time), 'MMM dd, yyyy HH:mm')}<br />
                  to {format(new Date(booking.end_time), 'MMM dd, yyyy HH:mm')}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Equipment:</strong>
                </Typography>
                <Box mb={1}>
                  {booking.equipment.map((eq) => (
                    <Chip
                      key={eq.equipment_id}
                      label={`${eq.name} (${eq.category})`}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>
                
                <Typography variant="caption" color="text.secondary">
                  Requested: {format(new Date(booking.created_at), 'MMM dd, yyyy HH:mm')}
                </Typography>
              </CardContent>
              
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<CheckCircle />}
                  onClick={() => handleAction(booking, 'approve')}
                  size="small"
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Cancel />}
                  onClick={() => handleAction(booking, 'reject')}
                  size="small"
                >
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Action Confirmation Dialog */}
      <Dialog open={actionDialog.open} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {actionDialog.action === 'approve' ? 'Approve' : 'Reject'} Booking Request
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to {actionDialog.action} booking #{actionDialog.booking?.booking_id}?
          </Typography>
          {actionDialog.booking && (
            <Box sx={{ my: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="body2">
                <strong>User:</strong> {actionDialog.booking.user.name}
              </Typography>
              <Typography variant="body2">
                <strong>Project:</strong> {actionDialog.booking.project_name}
              </Typography>
              <Typography variant="body2">
                <strong>Equipment:</strong> {actionDialog.booking.equipment.map(eq => eq.name).join(', ')}
              </Typography>
            </Box>
          )}
          <TextField
            fullWidth
            label={actionDialog.action === 'approve' ? 'Approval Comments (Optional)' : 'Rejection Reason (Required)'}
            multiline
            rows={3}
            value={actionDialog.reason}
            onChange={(e) => setActionDialog(prev => ({ ...prev, reason: e.target.value }))}
            required={actionDialog.action === 'reject'}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button 
            onClick={handleSubmitAction} 
            variant="contained"
            color={actionDialog.action === 'approve' ? 'success' : 'error'}
          >
            {actionDialog.action === 'approve' ? 'Approve' : 'Reject'}
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