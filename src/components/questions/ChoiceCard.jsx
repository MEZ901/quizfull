const ChoiceCard = (props) => {
  return (
    <div id={props.id} className="bg-glass w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center mt-5 cursor-pointer hover:w-[155px] hover:h-[155px] md:hover:w-[205px] md:hover:h-[205px] transition-all">
        <p className="text-black font-semibold text-center p-5">{props.choice}</p>
    </div>
  )
}

export default ChoiceCard