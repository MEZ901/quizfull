import Navbar from "../components/common/Navbar";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="main min-h-screen min-w-full">
      <div className="w-11/12 m-auto">
        <Navbar />
      </div>
      <main className="w-11/12 m-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout