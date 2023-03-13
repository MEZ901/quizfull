import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { newActiveStep, resetActiveStep } from '../../features/stepper/ActiveSlice';
import { newCompleted, resetCompleted } from '../../features/stepper/CompletedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const steps = ['Info', 'Quiz', 'Result'];

const StepperComponent = () => {
  const activeStep = useSelector(state => state.activeStep.value);
  const completed = useSelector(state => state.completedSteps.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    switch (activeStep) {
      case 0:
        navigate('/quiz/info');
        break;
      case 1:
        navigate('/quiz/questions');
        break;
      case 2:
        navigate('/quiz/result');
        break;
    }
  }, [activeStep]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    dispatch(newActiveStep());
  };

  const handleComplete = () => {
    dispatch(newCompleted(activeStep));
    handleNext();
  };

  const handleReset = () => {
    dispatch(resetActiveStep());
    dispatch(resetCompleted());
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}
                completed={completed[index]}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#eee', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'grey.500', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#eee', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: 'common.white', // Just text label (ACTIVE)
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'black', // circle's number (ACTIVE)
                  },
          }}>
            <StepButton color="inherit">
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepperComponent