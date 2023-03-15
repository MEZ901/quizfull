import { Typography, Rating, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { resetActiveStep } from '../features/stepper/ActiveSlice';
import { resetCompleted } from '../features/stepper/CompletedSlice';
import { resetScore } from '../features/user/userSlice';
import { resetCorrectAnswer, resetWrongAnswer } from '../features/user/ScoreCounterSlice';

const Result = () => {
  const score = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  const stars = (score.score * 5) / 100;

  const handleClick = () => {
    dispatch(resetActiveStep());
    dispatch(resetCompleted());
    dispatch(resetScore());
    dispatch(resetCorrectAnswer());
    dispatch(resetWrongAnswer());
  }
  return (
    <div>
      <Typography variant='h4' sx={{textAlign: 'center', m: 4, fontWeight: 'bold'}}>
        Finally, it's all done.
      </Typography>
      <Rating name="half-rating" defaultValue={stars} precision={0.5} size='large' sx={{display: 'flex', justifyContent: 'center'}} readOnly />
      <Typography variant='h6' sx={{textAlign: 'center', m: 4}}>
        { score.score > 50 ? `🎉 congratulations You got ${score.score}% 🎉` : `unfortunately you didn't pass the quiz successfully, you got ${score.score}` }
      </Typography>
      <div className='w-full flex justify-center'>
        <Button variant="contained" onClick={handleClick}>Retake the test</Button>
      </div>
    </div>
  )
}

export default Result