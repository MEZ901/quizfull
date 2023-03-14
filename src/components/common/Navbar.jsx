import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { resetActiveStep } from '../../features/stepper/ActiveSlice';
import { resetCompleted } from '../../features/stepper/CompletedSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-between pt-2'>
        <Link to="/home" onClick={() => { dispatch(resetActiveStep()); dispatch(resetCompleted()) }} className='text-white text-4xl font-bold'>QuizFull</Link>
        <div>
            <button className='mx-2 text-white'>LOGIN</button>
            <Button color='info' variant="contained">SIGNUP</Button>
        </div>
    </div>
  )
}

export default Navbar