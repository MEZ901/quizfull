import React from 'react'
import ChoiceCard from './ChoiceCard'

const QuestionCard = (props) => {
  return (
    <div>
      <h1 className='m-5 text-center text-xl font-bold'>{props.question}</h1>
      <div className='flex gap-2 flex-wrap justify-evenly'>
        {props.choices.map(choice => (
          <ChoiceCard choice={choice.choice} />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard