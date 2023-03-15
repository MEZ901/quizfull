import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../../features/modal/AuthModalSlice';
import { username } from '../../features/user/userSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomModal = () => {
    const modal = useSelector(state => state.authModal.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newUsername, setNewUsername] = useState("");
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
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: 'bold'}}>
                    Enter your username
                </Typography>
                <TextField id="filled-basic" label="username" variant="filled" margin='normal' fullWidth onChange={(e) => {setNewUsername(e.target.value)}} />
                <Button variant="outlined" sx={{mt: 1}} onClick={() => {dispatch(username(newUsername)); navigate('/quiz/info'); dispatch(modalToggle())}}>Next</Button>
            </Box>
        </Modal>
    )
}

export default CustomModal