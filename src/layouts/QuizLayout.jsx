import React from 'react';
import { Outlet } from 'react-router-dom';
import StepperComponent from '../components/common/StepperComponent';

const QuizLayout = () => {
  return (
    <div>
        <div className='mt-5'>
            <StepperComponent />
        </div>
        <Outlet />
    </div>
  )
}

export default QuizLayout