import img from '../../assets/JavaScript frameworks-bro.svg'

const Hero = () => {
  return (
    <section className=' w-11/12 m-auto justify-between'>
        <div className='flex justify-around items-center'>
            <div className='text-center w-3/5'>
                <h1 className='text-white text-2xl font-bold mb-2'>Put your knowledge to the test</h1>
                <p className=' text-gray-300'>Are you ready to put your knowledge to the test? Taking a quiz is a great way to challenge yourself, learn something new, and have fun all at the same time. Whether you're looking to brush up on a particular subject or just want to see how much you know, a quiz can provide a great opportunity to do so.</p>
            </div>
            <img src={img} alt="mockup" width="400px" />
        </div>
    </section>
  )
}

export default Hero