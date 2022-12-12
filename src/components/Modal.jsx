import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Modal, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth';

function FormModal({ body, handleClose, open }) {
  const role = useSelector(authSelector.userRole);
  return (
    <>
      <Modal
        //sx={{}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Card
            sx={{
              position: 'absolute',
              maxWidth: 345,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Role : {role}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

export default FormModal;
