import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="main min-h-screen">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-white">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Button variant="contained" color='info' onClick={()=>{navigate('/')}}>Back to Homepage</Button>
        </div>   
    </div>
</section>
  );
}

export default PageNotFound;