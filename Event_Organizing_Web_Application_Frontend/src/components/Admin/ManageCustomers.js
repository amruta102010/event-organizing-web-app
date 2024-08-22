import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../../services/userService';
import AdminLayout from '../Layout/AdminLayout';

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await getAllCustomers();
      console.log('API Response:', response); 
      const customersData = response;
      
      if (Array.isArray(customersData)) {
        setCustomers(customersData);
        setTotalCustomers(customersData.length);
      } else if (customersData.data && Array.isArray(customersData.data)) {
        setCustomers(customersData.data); 
        setTotalCustomers(customersData.data.length);
      } else {
        console.error('Unexpected response format:', customersData);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleDeleteCustomer = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmed) return;

    try {
      await deleteCustomer(userId);
      fetchCustomers(); 
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Manage Customers</h1>
        <p className="text-lg mb-4 text-center">Total Customers: {totalCustomers}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-center">ID</th>
                <th className="px-4 py-2 border text-center">First Name</th>
                <th className="px-4 py-2 border text-center">Last Name</th>
                <th className="px-4 py-2 border text-center">Email</th>
                <th className="px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <tr key={customer.userId}>
                    <td className="px-4 py-2 border text-center">{customer.userId}</td>
                    <td className="px-4 py-2 border text-center">{customer.firstName}</td>
                    <td className="px-4 py-2 border text-center">{customer.lastName}</td>
                    <td className="px-4 py-2 border text-center">{customer.email}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleDeleteCustomer(customer.userId)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 border text-center">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageCustomers;
