import React from 'react';
import Header from '../components/Shared/Header'; 
import Footer from '../components/Shared/Footer';

const AboutPage = () => {
  return (
    <div className="bg-blue-100 text-blue-900 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-2 md:p-4 lg:p-8"> 
        <h1 className="text-2xl md:text-2.5xl lg:text-3xl font-extrabold mb-4 md:mb-5 lg:mb-6 text-center tracking-widest text-blue-800">About Us</h1> 
        <p className="text-lg md:text-xl lg:text-1.5xl font-medium mb-3 md:mb-4 lg:mb-5 leading-relaxed text-justify shadow-lg p-2 md:p-3 bg-blue-200 bg-opacity-75 rounded-lg"> 
          Welcome to <span className="font-bold text-blue-600">EventOrganizer</span>, your premier destination for seamless event planning and management. We are dedicated to transforming your vision into reality, making every celebration a memorable experience. Whether you're planning a birthday party, a wedding, or a seminar, we provide comprehensive services to cater to your unique needs.
        </p>
        
        <h2 className="text-xl md:text-2xl lg:text-2.5xl font-bold mt-5 md:mt-7 lg:mt-8 mb-2 md:mb-3 lg:mb-3 text-center tracking-wide underline text-blue-800">Our Mission</h2> 
        <p className="text-lg md:text-xl lg:text-1.5xl font-medium mb-3 md:mb-4 lg:mb-5 leading-relaxed text-justify shadow-lg p-2 md:p-3 bg-blue-200 bg-opacity-75 rounded-lg"> 
          At <span className="font-bold text-blue-600">EventOrganizer</span>, our mission is to simplify event planning by offering an all-in-one platform that connects customers with vendors and manages every detail from start to finish. We strive to create unforgettable events that leave lasting impressions, ensuring our clients can enjoy their special moments without the stress of organizing.
        </p>
        
        <h2 className="text-xl md:text-2xl lg:text-2.5xl font-bold mt-5 md:mt-7 lg:mt-8 mb-2 md:mb-3 lg:mb-3 text-center tracking-wide underline text-blue-800">What We Offer</h2> 
        <ul className="list-disc list-inside text-lg md:text-xl lg:text-1.5xl font-medium mb-3 md:mb-4 lg:mb-5 leading-relaxed text-justify shadow-lg p-2 md:p-3 bg-blue-200 bg-opacity-75 rounded-lg"> 
          <li><strong className="text-blue-600">Personalized Event Planning:</strong> Our platform allows you to customize every aspect of your event, ensuring it reflects your style and preferences.</li>
          <li><strong className="text-blue-600">Wide Range of Services:</strong> From venue selection and decoration to catering and entertainment, we provide a wide array of services to cover all your event needs.</li>
          <li><strong className="text-blue-600">Trusted Vendors:</strong> We partner with reliable vendors who share our commitment to quality and excellence, ensuring your event runs smoothly.</li>
          <li><strong className="text-blue-600">User-Friendly Interface:</strong> Our easy-to-use app helps you plan, book, and manage your events effortlessly.</li>
          <li><strong className="text-blue-600">Comprehensive Support:</strong> Our dedicated team is always here to assist you, providing expert advice and support throughout the planning process.</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl lg:text-2.5xl font-bold mt-5 md:mt-7 lg:mt-8 mb-2 md:mb-3 lg:mb-3 text-center tracking-wide underline text-blue-800">Why Choose Us</h2> 
        <p className="text-lg md:text-xl lg:text-1.5xl font-medium mb-3 md:mb-4 lg:mb-5 leading-relaxed text-justify shadow-lg p-2 md:p-3 bg-blue-200 bg-opacity-75 rounded-lg"> 
          <span className="font-bold text-blue-600">EventOrganizer</span> stands out for its dedication to excellence, attention to detail, and commitment to customer satisfaction. We believe every event is unique and deserves to be celebrated with creativity and precision. With our innovative platform, you can rest assured that your event will be handled by professionals who care about making it perfect.
        </p>
        
        <p className="text-lg md:text-xl lg:text-1.5xl font-medium leading-relaxed text-justify shadow-lg p-2 md:p-3 bg-blue-200 bg-opacity-75 rounded-lg"> 
          Join us at <span className="font-bold text-blue-600">EventOrganizer</span> and let us help you create unforgettable moments. Your dream event is just a few clicks away!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
