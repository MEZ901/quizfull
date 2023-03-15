import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../../features/modal/ExplanationModalSlice';
import { useMediaQuery } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExplanationModal = (props) => {
  const modal = useSelector(state => state.explanationModal.value);
  const dispatch = useDispatch();
  const lg = useMediaQuery('(min-width:700px)');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: lg ? '40%' : '60%',
        bgcolor: '#eee',
        border: '1px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 3,
    };
    return (
      <Modal
          open={modal}
          onClose={() => {dispatch(modalToggle())}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: 'bold', mb: 2}}>
                  Explanation
              </Typography>
              <Typography>
                {props.explanation}
              </Typography>
          </Box>
      </Modal>
  );
}

export default ExplanationModal;