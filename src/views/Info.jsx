import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { newActiveStep } from '../features/stepper/ActiveSlice';
import { newCompleted } from '../features/stepper/CompletedSlice';
import { useDispatch, useSelector } from 'react-redux';

const Info = () => {
  const activeStep = useSelector(state => state.activeStep.value);
  const dispatch = useDispatch();
  const startQuiz = () => {
    dispatch(newCompleted(activeStep));
    dispatch(newActiveStep());
  }
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-white sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-center">some rules of the quiz</h2>
            <ul className='text-center'>
              <li><span className='font-bold'>1.</span> Each quiz has a specified duration and time limits for each question.</li>
              <li><span className='font-bold'>2.</span> You may take our quizzes as many times as you like.</li>
              <li><span className='font-bold'>3.</span> You can see the explanation after selecting your answer.</li>
              <li><span className='font-bold'>4.</span> Once you select your answer, it can't be undone.</li>
              <li><span className='font-bold'>5.</span> You'll get score on the basis of your correct answers.</li>
            </ul>
            <p className='text-center font-semibold m-3'>By clicking the "Start Quiz" button, you agree to abide by these rules. Good luck!</p>
            <Button variant="contained" endIcon={<NavigateNextIcon />} color='info' sx={{float: 'right'}} onClick={startQuiz}>Start Quiz</Button>
        </div>
    </div>
  )
}

export default Info