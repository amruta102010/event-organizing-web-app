import React from 'react';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={image}
          alt="Selected"
          className="max-w-full max-h-screen object-contain"
        />
        <button
          className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
