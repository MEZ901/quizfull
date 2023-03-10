import Navbar from "../components/index/Navbar";
import Hero from "../components/index/Hero";

const App = () => {
  return (
    <div className='main min-h-screen min-w-full'>
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App