import React, { useEffect, useState } from 'react';
import CustomerLayout from '../Layout/CustomerLayout';
import { getUserById } from '../../services/userService';
import { getFromLocalStorage } from '../../utils/helpers';

const CustomerDashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userId = getFromLocalStorage('user');
    console.log(userId);  
    if (userId) {
      getUserById(userId)
        .then(response => {
          console.log(response.data);  
          setUsername(response.data.firstName);  
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <CustomerLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        <p>Welcome, {username}!</p>
        
      </div>
    </CustomerLayout>
  );
};

export default CustomerDashboard;
