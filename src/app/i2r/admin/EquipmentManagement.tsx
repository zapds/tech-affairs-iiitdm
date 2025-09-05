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
  Chip
} from '@mui/material';
import { DataGrid, GridColDef, GridRowId, GridActionsCellItem } from '@mui/x-data-grid';
import { Add, Edit, Delete } from '@mui/icons-material';

interface Equipment {
  equipment_id: number;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  status: 'A' | 'B' | 'U';
}

export default function EquipmentManagement() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState<{
    open: boolean;
    mode: 'add' | 'edit';
    equipment: Equipment | null;
  }>({
    open: false,
    mode: 'add',
    equipment: null
  });
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    status: 'A' as 'A' | 'B' | 'U'
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

  const fetchEquipment = async () => {
    try {
      const response = await fetch('/i2r/api/admin/equipment');
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'A':
        return <Chip label="Available" color="success" size="small" />;
      case 'B':
        return <Chip label="Booked" color="warning" size="small" />;
      case 'U':
        return <Chip label="Under Maintenance" color="error" size="small" />;
      default:
        return <Chip label="Unknown" color="default" size="small" />;
    }
  };

  const columns: GridColDef[] = [
    { field: 'equipment_id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => getStatusChip(params.value)
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          key="edit"
          icon={<Edit />}
          label="Edit"
          onClick={() => handleEdit(params.row)}
        />,
        <GridActionsCellItem
          key="delete"
          icon={<Delete />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
          disabled={params.row.status === 'B'}
        />
      ]
    }
  ];

  const handleAdd = () => {
    setFormData({
      name: '',
      category: '',
      description: '',
      imageUrl: '',
      status: 'A'
    });
    setDialog({
      open: true,
      mode: 'add',
      equipment: null
    });
  };

  const handleEdit = (equipment: Equipment) => {
    setFormData({
      name: equipment.name,
      category: equipment.category,
      description: equipment.description,
      imageUrl: equipment.imageUrl || '',
      status: equipment.status
    });
    setDialog({
      open: true,
      mode: 'edit',
      equipment
    });
  };

  const handleDelete = async (id: GridRowId) => {
    if (!confirm('Are you sure you want to delete this equipment?')) return;

    try {
      const response = await fetch(`/i2r/api/admin/equipment?equipment_id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Equipment deleted successfully',
          severity: 'success'
        });
        fetchEquipment();
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || 'Failed to delete equipment',
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error deleting equipment',
        severity: 'error'
      });
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.category || !formData.description) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    try {
      let response;
      if (dialog.mode === 'add') {
        response = await fetch('/i2r/api/admin/equipment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
      } else {
        response = await fetch('/i2r/api/admin/equipment', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            equipment_id: dialog.equipment!.equipment_id,
            ...formData
          })
        });
      }

      if (response.ok) {
        setSnackbar({
          open: true,
          message: `Equipment ${dialog.mode === 'add' ? 'added' : 'updated'} successfully`,
          severity: 'success'
        });
        setDialog({ open: false, mode: 'add', equipment: null });
        fetchEquipment();
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.error || `Failed to ${dialog.mode} equipment`,
          severity: 'error'
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: `Error ${dialog.mode === 'add' ? 'adding' : 'updating'} equipment`,
        severity: 'error'
      });
    }
  };

  const handleDialogClose = () => {
    setDialog({ open: false, mode: 'add', equipment: null });
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
        <Typography variant="h6">Equipment Management</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAdd}
        >
          Add Equipment
        </Button>
      </Box>

      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          
          rows={equipment}
          columns={columns}
          getRowId={(row) => row.equipment_id}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } }
          }}
          disableRowSelectionOnClick
        />
      </Box>

      {/* Add/Edit Equipment Dialog */}
      <Dialog open={dialog.open} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialog.mode === 'add' ? 'Add New Equipment' : 'Edit Equipment'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
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
              <TextField
                fullWidth
                label="Image URL"
                value={formData.imageUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status}
                  label="Status"
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'A' | 'B' | 'U' }))}
                >
                  <MenuItem value="A">Available</MenuItem>
                  <MenuItem value="B">Booked</MenuItem>
                  <MenuItem value="U">Under Maintenance</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
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
