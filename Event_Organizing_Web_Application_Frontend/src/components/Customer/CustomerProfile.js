import React, { useEffect, useState } from 'react';
import { getCustomerById, updateCustomerById } from '../../services/userService';  
import { getFromLocalStorage } from '../../utils/helpers';  
import CustomerLayout from '../Layout/CustomerLayout';

const CustomerProfile = () => {
    const [customer, setCustomer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const userId = getFromLocalStorage('userId');  

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await getCustomerById(userId);
                setCustomer(response.data);
                setFormData(response.data); 
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        fetchCustomer();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = async () => {
        try {
            await updateCustomerById(userId, formData);
            setCustomer(formData);  
            setIsEditing(false);   
        } catch (error) {
            console.error('Error updating customer data:', error);
        }
    };

    if (!customer) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <CustomerLayout>
            <div className="max-w-2xl mx-auto my-10 p-5 border rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-5 text-center">Customer Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold text-gray-700">First Name:</label>
                        <p className="text-lg text-gray-900">{customer.firstName}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Last Name:</label>
                        <p className="text-lg text-gray-900">{customer.lastName}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Email:</label>
                        <p className="text-lg text-gray-900">{customer.email}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Phone:</label>
                        <p className="text-lg text-gray-900">{customer.mobileNo}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Address:</label>
                        <p className="text-lg text-gray-900">{customer.address}</p>
                    </div>
                    <button
                        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={() => setIsEditing(true)}
                    >
                        Update Profile
                    </button>
                </div>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Update Profile</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Phone:</label>
                                <input
                                    type="text"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                                    onClick={handleUpdate}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-300 rounded-lg"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </CustomerLayout>
    );
};

export default CustomerProfile;