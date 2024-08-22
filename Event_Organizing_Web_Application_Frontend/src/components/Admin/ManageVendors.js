import React, { useEffect, useState } from 'react';
import { getAllVendors, deleteVendor } from '../../services/userService';
import AdminLayout from '../Layout/AdminLayout';

const ManageVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [totalVendors, setTotalVendors] = useState(0);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await getAllVendors();
      console.log('API Response:', response); 
      const vendorsData = response; 
      
      
      if (Array.isArray(vendorsData)) {
        setVendors(vendorsData);
        setTotalVendors(vendorsData.length);
      } else if (vendorsData.data && Array.isArray(vendorsData.data)) {
        setVendors(vendorsData.data); 
        setTotalVendors(vendorsData.data.length);
      } else {
        console.error('Unexpected response format:', vendorsData);
      }
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const handleDeleteVendor = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this vendor?");
    if (!confirmed) return;

    try {
      await deleteVendor(userId);
      fetchVendors(); 
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Manage Vendors</h1>
        <p className="text-lg mb-4 text-center">Total Vendors: {totalVendors}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-center">ID</th>
                <th className="px-4 py-2 border text-center">First Name</th>
                <th className="px-4 py-2 border text-center">Last Name</th>
                <th className="px-4 py-2 border text-center">Email</th>
                <th className="px-4 py-2 border text-center">GST No</th>
                <th className="px-4 py-2 border text-center">Specialization</th>
                <th className="px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <tr key={vendor.userId}>
                    <td className="px-4 py-2 border text-center">{vendor.userId}</td>
                    <td className="px-4 py-2 border text-center">{vendor.firstName}</td>
                    <td className="px-4 py-2 border text-center">{vendor.lastName}</td>
                    <td className="px-4 py-2 border text-center">{vendor.email}</td>
                    <td className="px-4 py-2 border text-center">{vendor.gstNo}</td>
                    <td className="px-4 py-2 border text-center">{vendor.specialization}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleDeleteVendor(vendor.userId)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-4 py-2 border text-center">
                    No vendors found
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

export default ManageVendors;
