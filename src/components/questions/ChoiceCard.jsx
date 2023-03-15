import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToggle } from "../../features/quiz/SelectSlice";

const ChoiceCard = (props) => {
  const [background, setBackground] = useState('bg-glass');
  const [selected, setSelected] = useState(false);
  const alreadySelect = useSelector(state => state.selectChoice.value)
  const dispatch = useDispatch();

  useEffect(() => {
    if(alreadySelect && !selected) props.choice.id == props.answer ? setBackground('bg-glass-success') : setBackground('bg-glass')
    else if(!alreadySelect) setBackground('bg-glass')
    setSelected(false);
  }, [alreadySelect])

  const handelClick = () => {
    if(!alreadySelect) {
      props.choice.id == props.answer ? setBackground('bg-glass-success') : setBackground('bg-glass-failed');
      setSelected(true);
      dispatch(selectToggle());
    }
  }
  return (
    <div id={`choice-${props.choice.id}`} onClick={handelClick} className={`${background} w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center mt-5 cursor-pointer hover:w-[155px] hover:h-[155px] md:hover:w-[205px] md:hover:h-[205px] transition-all`}>
        <p className="text-black font-semibold text-center p-5">{props.choice.choice}</p>
    </div>
  )
}

export default ChoiceCard