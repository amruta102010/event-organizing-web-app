// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { sendPasswordResetEmail } from '../api/auth';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      setSuccess(true);
    } catch (error) {
      console.error('Error sending reset email:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Reset Email
          </Button>
        </form>
        {success && <p className="mt-4 text-green-500">Reset email sent successfully!</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
