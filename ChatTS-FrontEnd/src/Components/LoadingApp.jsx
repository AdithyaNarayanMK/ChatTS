import { useState , useEffect } from 'react';
import SlidingAnimation from './SlidingAnimation';
import Home from "./Home";

export default function MainApp() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Do the necessary data or resource fetching here
      setTimeout(() => setIsLoading(false), 5000); 
      // set isLoading as false after 2 seconds
    }, []);

    return (
      <div>
        {isLoading ? <SlidingAnimation /> : (
        <div className='loading'>
          <Home />
        </div>)
        }
      </div>
    );
}