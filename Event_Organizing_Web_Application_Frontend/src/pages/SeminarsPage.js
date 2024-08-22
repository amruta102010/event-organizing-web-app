// src/pages/SeminarsPage.js
import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import Modal from '../components/Shared/Modal/ZoomImageModal';

// Array of image paths
const images = [
  '/assets/images/seminars/seminar1.jpg',
  '/assets/images/seminars/seminar2.jpg',
  '/assets/images/seminars/seminar3.jpg',
  '/assets/images/seminars/seminar4.avif',
  '/assets/images/seminars/seminar5.webp',
  '/assets/images/seminars/seminar6.avif',
  '/assets/images/seminars/seminar7.jpg',
  '/assets/images/seminars/seminar8.jpg',
  '/assets/images/seminars/seminar9.jpg',
  '/assets/images/seminars/seminar10.jpg',
  '/assets/images/seminars/seminar11.jpg',
  '/assets/images/seminars/seminar12.jpg',
];

const SeminarsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <div className="flex flex-wrap -mx-2 mb-16">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer">
                <img
                  src={image}
                  alt={`Seminar ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => handleImageClick(image)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-blue-500 text-white text-2xl py-4 px-8 rounded-md shadow-lg hover:bg-blue-600">
            BookEvent
          </Button>
        </div>
      </main>
      <Footer />
      
      <Modal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default SeminarsPage;
