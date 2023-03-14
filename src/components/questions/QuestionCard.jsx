import React from 'react'
import ChoiceCard from './ChoiceCard'

const QuestionCard = (props) => {
  return (
    <div>
      <h1 className='m-5 text-center text-xl font-bold'>{props.question.question}</h1>
      <div className='flex gap-2 flex-wrap justify-evenly'>
        {props.question.choices.map(choice => (
          <div key={choice.id}>
            <ChoiceCard choice={choice} answer={props.question.answer} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard