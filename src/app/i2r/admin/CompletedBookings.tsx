"use client";

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  TablePagination
} from '@mui/material';
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

export default function CompletedBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchCompletedBookings = async () => {
    try {
      const response = await fetch('/i2r/api/admin/bookings?type=all');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error('Failed to fetch completed bookings');
      }
    } catch (error) {
      console.error('Error fetching completed bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompletedBookings();
  }, []);

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'A':
        return <Chip label="Approved" color="success" size="small" />;
      case 'R':
        return <Chip label="Rejected" color="error" size="small" />;
      case 'P':
        return <Chip label="Pending" color="warning" size="small" />;
      default:
        return <Chip label="Unknown" color="default" size="small" />;
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          No bookings found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All bookings will appear here
        </Typography>
      </Box>
    );
  }

  // Sort bookings by end time (most recent first)
  const sortedBookings = [...bookings].sort((a, b) => 
    new Date(b.end_time).getTime() - new Date(a.end_time).getTime()
  );

  const paginatedBookings = sortedBookings.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        All Bookings ({bookings.length})
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Equipment</TableCell>
              <TableCell>Time Period</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBookings.map((booking) => (
              <TableRow key={booking.booking_id}>
                <TableCell>{booking.booking_id}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {booking.user.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {booking.user.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {booking.project_name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {booking.intended_use.length > 50 
                      ? `${booking.intended_use.substring(0, 50)}...` 
                      : booking.intended_use}
                  </Typography>
                </TableCell>
                <TableCell>{booking.department}</TableCell>
                <TableCell>
                  <Box>
                    {booking.equipment.map((eq, index) => (
                      <Box key={index} mb={0.5}>
                        <Typography variant="body2" fontSize="0.75rem">
                          {eq.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontSize="0.7rem">
                          {eq.category}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontSize="0.75rem">
                    {format(new Date(booking.start_time), 'HH:mm, MMM dd yyyy')}
                  </Typography>
                  <Typography variant="body2" fontSize="0.75rem">
                    {format(new Date(booking.end_time), 'HH:mm, MMM dd yyyy')}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" fontSize="0.7rem">
                    Duration: {Math.ceil((new Date(booking.end_time).getTime() - new Date(booking.start_time).getTime()) / (1000 * 60 * 60))} hours
                  </Typography>
                </TableCell>
                <TableCell>{getStatusChip(booking.status)}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontSize="0.75rem">
                    {booking.comments.length > 30 
                      ? `${booking.comments.substring(0, 30)}...` 
                      : booking.comments || '-'}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={bookings.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </>
  );
}
