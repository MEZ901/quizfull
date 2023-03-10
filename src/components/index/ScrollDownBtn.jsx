import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollDownBtn = () => {
  return (
    <div>
        <section className='w-full flex items-center justify-center'>
            <p className='text-center text-white absolute bottom-16'>SCROLL DOWN</p>
            <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10"><div class="w-8 h-8 border-2 border-white rounded-full animate-bounce text-center"><KeyboardArrowDownIcon style={{color: "#fff"}} /></div></p>
        </section>
    </div>
  )
}

export default ScrollDownBtn