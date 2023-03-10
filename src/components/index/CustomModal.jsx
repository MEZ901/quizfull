import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../../features/modal/ModalSlice';

const CustomModal = () => {
    const modal = useSelector(state => state.modal.value);
    const dispatch = useDispatch();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#eee',
        border: '1px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 2,
    };
    return (
        <Modal
            open={modal}
            onClose={() => {dispatch(modalToggle())}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Enter your username
                </Typography>
                <div>
                <TextField id="filled-basic" label="username" variant="filled" margin='normal' fullWidth />
                <Button variant="outlined">submit</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default CustomModal