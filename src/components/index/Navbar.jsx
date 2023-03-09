import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className='w-11/12 m-auto flex justify-between pt-2'>
        <h1 className='text-white text-4xl font-bold'>QuizFull</h1>
        <div>
            <button className='mx-2 text-white'>LOGIN</button>
            <Button variant="contained">SIGNUP</Button>
        </div>
    </div>
  )
}

export default Navbar