
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-2"> 
        <div className="flex flex-wrap -mx-1"> 
          <Link to="/events/birthdays" className="w-full md:w-1/2 px-1 mb-2"> 
            <div className="relative w-full h-[50vh]"> 
              <img src="/assets/images/event5.webp" alt="Birthdays" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2.5xl font-bold"> 
                Birthdays
              </div>
            </div>
          </Link>
          <Link to="/events/seminars" className="w-full md:w-1/2 px-1 mb-2"> 
            <div className="relative w-full h-[50vh]"> 
              <img src="/assets/images/event6.webp" alt="Seminars" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2.5xl font-bold"> 
                Seminars
              </div>
            </div>
          </Link>
          <Link to="/events/weddings" className="w-full md:w-1/2 px-1 mb-2"> 
            <div className="relative w-full h-[50vh]"> 
              <img src="/assets/images/event7.jpeg" alt="Weddings" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2.5xl font-bold"> 
                Weddings
              </div>
            </div>
          </Link>
          <Link to="/events/concerts" className="w-full md:w-1/2 px-1 mb-2"> {/* Reduced padding and margin */}
            <div className="relative w-full h-[50vh]"> {/* Reduced height */}
              <img src="/assets/images/event8.jpeg" alt="Concerts" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2.5xl font-bold"> {/* Reduced text size */}
                Concerts
              </div>
            </div>
          </Link>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
