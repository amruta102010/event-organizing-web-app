import React, { useEffect, useState } from 'react';
import { getVendorById, updateVendorById } from '../../services/userService';  
import { getFromLocalStorage } from '../../utils/helpers';  
import VendorLayout from '../Layout/VendorLayout';

const VendorProfile = () => {
    const [vendor, setVendor] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const userId = getFromLocalStorage('userId');  

    useEffect(() => {
        const fetchVendor = async () => {
            try {
                const response = await getVendorById(userId);
                setVendor(response.data);
                setFormData(response.data); 
            } catch (error) {
                console.error('Error fetching vendor data:', error);
            }
        };

        fetchVendor();
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
            await updateVendorById(userId, formData);
            setVendor(formData);  
            setIsEditing(false);  
        } catch (error) {
            console.error('Error updating vendor data:', error);
        }
    };

    if (!vendor) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <VendorLayout>
            <div className="max-w-2xl mx-auto my-10 p-5 border rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-5 text-center">Vendor Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold text-gray-700">First Name:</label>
                        <p className="text-lg text-gray-900">{vendor.firstName}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Last Name:</label>
                        <p className="text-lg text-gray-900">{vendor.lastName}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Email:</label>
                        <p className="text-lg text-gray-900">{vendor.email}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Phone:</label>
                        <p className="text-lg text-gray-900">{vendor.mobileNo}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Address:</label>
                        <p className="text-lg text-gray-900">{vendor.address}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">GST No:</label>
                        <p className="text-lg text-gray-900">{vendor.gstNo}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Booking Capacity:</label>
                        <p className="text-lg text-gray-900">{vendor.bookingCapacity}</p>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700">Specialization:</label>
                        <p className="text-lg text-gray-900">{vendor.specialization}</p>
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
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">GST No:</label>
                                <input
                                    type="text"
                                    name="gstNo"
                                    value={formData.gstNo}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Booking Capacity:</label>
                                <input
                                    type="number"
                                    name="bookingCapacity"
                                    value={formData.bookingCapacity}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Specialization:</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
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
        </VendorLayout>
    );
};

export default VendorProfile;