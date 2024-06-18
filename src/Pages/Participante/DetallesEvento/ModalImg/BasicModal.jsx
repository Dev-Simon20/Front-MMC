import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  minWidth:'340px',
  maxWidth:'550px',
  border:'none',
  outline:'none',
  borderRadius:'16px',
  p:0,
};

export default function BasicModal({url_image,setOpen,open}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={url_image} style={{width:'100%',borderRadius:'16px'}} alt="" />
        </Box>
      </Modal>
    </div>
  );
}
