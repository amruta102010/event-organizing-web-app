import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (roleId) => {
    navigate(`/register/${roleId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Choose Your Role</h2>
        <p className="mb-8 text-center text-gray-600">Select the role you want to register as:</p>
        <div className="mb-4">
          <button
            onClick={() => handleRoleSelect(2)} 
            className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition duration-200 text-lg font-semibold shadow-md"
          >
            Customer
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={() => handleRoleSelect(3)} 
            className="w-full bg-green-500 text-white p-4 rounded hover:bg-green-600 transition duration-200 text-lg font-semibold shadow-md"
          >
            Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
