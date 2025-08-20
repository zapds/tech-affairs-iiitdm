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
  Snackbar,
  Alert,
  GridLegacy as Grid,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from '@mui/material';
import { Add, Edit, Delete, Upload } from '@mui/icons-material';
import Image from 'next/image';

interface Club {
  club_id: number;
  name: string;
  iconUrl: string;
}

export default function ClubsManagement() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState<{
    open: boolean;
    mode: 'add' | 'edit';
    club: Club | null;
  }>({
    open: false,
    mode: 'add',
    club: null
  });
  const [formData, setFormData] = useState({
    name: '',
    iconUrl: ''
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

  const fetchClubs = async () => {
    try {
      const response = await fetch('/admin/api/clubs');
      if (response.ok) {
        const data = await response.json();
        setClubs(data);
      } else {
        setSnackbar({
          open: true,
          message: 'Failed to fetch clubs',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error fetching clubs',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const handleAdd = () => {
    setFormData({
      name: '',
      iconUrl: ''
    });
    setImageFile(null);
    setDialog({
      open: true,
      mode: 'add',
      club: null
    });
  };

  const handleEdit = (club: Club) => {
    setFormData({
      name: club.name,
      iconUrl: club.iconUrl || ''
    });
    setImageFile(null);
    setDialog({
      open: true,
      mode: 'edit',
      club
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this club?')) return;

    try {
      const response = await fetch(`/admin/api/clubs?club_id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Club deleted successfully',
          severity: 'success'
        });
        fetchClubs();
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || 'Failed to delete club',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error deleting club',
        severity: 'error'
      });
    }
  };

  const handleImageUpload = async (clubId: number) => {
    if (!imageFile) return null;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('clubId', clubId.toString());

      const response = await fetch('/admin/api/upload/club', {
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
    if (!formData.name) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    try {
      let response;
      let clubId = dialog.club?.club_id;

      // First create/update the club
      if (dialog.mode === 'add') {
        response = await fetch('/admin/api/clubs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          clubId = data.club.club_id;
        }
      } else {
        response = await fetch('/admin/api/clubs', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            club_id: dialog.club!.club_id,
            name: formData.name
          })
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${dialog.mode} club`);
      }

      // Upload image if provided
      let finalIconUrl = formData.iconUrl;
      if (imageFile && clubId) {
        try {
          finalIconUrl = await handleImageUpload(clubId);
          
          // Update club with new icon URL
          await fetch('/admin/api/clubs', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              club_id: clubId,
              iconUrl: finalIconUrl
            })
          });
        } catch (uploadError) {
          console.error('Error uploading image:', uploadError);
          // Continue without image if upload fails
        }
      }

      setSnackbar({
        open: true,
        message: `Club ${dialog.mode === 'add' ? 'added' : 'updated'} successfully`,
        severity: 'success'
      });
      setDialog({ open: false, mode: 'add', club: null });
      fetchClubs();
    } catch (error) {
      setSnackbar({
        open: true,
        message: error instanceof Error ? error.message : `Error ${dialog.mode === 'add' ? 'adding' : 'updating'} club`,
        severity: 'error'
      });
    }
  };

  const handleDialogClose = () => {
    setDialog({ open: false, mode: 'add', club: null });
    setImageFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
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
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Clubs Management</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAdd}
        >
          Add Club
        </Button>
      </Box>

      <Grid container spacing={3}>
        {clubs.map((club) => (
          <Grid item xs={12} sm={6} md={4} key={club.club_id}>
            <Card>
              {club.iconUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={club.iconUrl}
                  alt={club.name}
                  sx={{ objectFit: 'contain' }}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {club.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {club.club_id}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<Edit />}
                  onClick={() => handleEdit(club)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(club.club_id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Club Dialog */}
      <Dialog open={dialog.open} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialog.mode === 'add' ? 'Add New Club' : 'Edit Club'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Club Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              sx={{ mb: 2 }}
            />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Club Icon
              </Typography>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="icon-upload">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<Upload />}
                  disabled={uploading}
                >
                  {imageFile ? imageFile.name : 'Upload Icon'}
                </Button>
              </label>
              {uploading && <CircularProgress size={20} sx={{ ml: 2 }} />}
            </Box>

            {(formData.iconUrl || imageFile) && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Preview:
                </Typography>
                <Image
                  src={imageFile ? URL.createObjectURL(imageFile) : formData.iconUrl}
                  alt="Preview"
                  style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
                />
              </Box>
            )}
          </Box>
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
    </>
  );
}