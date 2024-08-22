import React from 'react';

const Notification = ({ message, type }) => {
  return (
    <div className={`p-4 mb-4 ${type === 'error' ? 'bg-red-600' : 'bg-green-600'} text-white`}>
      {message}
    </div>
  );
};

export default Notification;
