import React, { useEffect, useState } from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { getUserById } from '../../services/userService';
import { getFromLocalStorage } from '../../utils/helpers';

const AdminDashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userId = getFromLocalStorage('user');
    if (userId) {
      getUserById(userId)
        .then(response => {
          setUsername(response.data.firstName);  
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome, {username}!</p>
        
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
