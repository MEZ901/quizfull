import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className='flex justify-between pt-2'>
        <h1 className='text-white text-4xl font-bold'>QuizFull</h1>
        <div>
            <button className='mx-2 text-white'>LOGIN</button>
            <Button style={{backgroundColor: "#5C4CF4"}} variant="contained">SIGNUP</Button>
        </div>
    </div>
  )
}

export default Navbar