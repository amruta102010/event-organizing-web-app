import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { register } from '../store/actions/authActions';
import Input from '../components/UI/Input';
import { validateEmail, validatePassword, validateMobileNumber } from '../utils/validations';
import '../styles/global.css';

const RegistrationPage = () => {
  const { roleId } = useParams();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    mobileNumber: '+91',
    address: '',
    gstNumber: '', 
    specialization: '', 
    bookingCapacity: '', 
    role: roleId || '2', 
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.registration);

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobileNumber') {
      let mobileNumber = value;

      if (!mobileNumber.startsWith('+91')) {
        mobileNumber = '+91';
      }

      const digitsOnly = mobileNumber.replace(/^\+91/, '').replace(/\D/g, '');
      mobileNumber = `+91${digitsOnly}`;

      setFormData((prevData) => ({
        ...prevData,
        [name]: mobileNumber,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmPassword, mobileNumber, dob, role } = formData;

    const newErrors = {};

    if (!firstname) {
      newErrors.firstname = 'First name is required';
    }

    if (!lastname) {
      newErrors.lastname = 'Last name is required';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!validateMobileNumber(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits with +91 prefix';
    }

    if (role === '3' && (!formData.gstNumber || !formData.specialization || !formData.bookingCapacity)) {
      newErrors.vendorFields = 'All vendor fields are required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    const payload = {
      firstName: firstname,
      lastName: lastname,
      email,
      password,
      address: formData.address,
      mobileNo: formData.mobileNumber.replace(/^\+91/, ''), 
      dateOfBirth: dob,
      roleId: parseInt(role), 
      ...(role === '3' && { 
        gstNo: formData.gstNumber,
        bookingCapacity: formData.bookingCapacity,
        specialization: formData.specialization,
      }),
    };

    try {
      await dispatch(register(payload));
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md sm:max-w-sm">
        <h2 className="text-xl sm:text-lg font-bold mb-4 text-center">
          Register as {roleId === '3' ? 'Vendor' : 'Customer'}
        </h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        
        <div className="mb-3">
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.firstname && <div className="mt-1 text-red-500 text-xs">{errors.firstname}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.lastname && <div className="mt-1 text-red-500 text-xs">{errors.lastname}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.email && <div className="mt-1 text-red-500 text-xs">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.password && <div className="mt-1 text-red-500 text-xs">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.confirmPassword && <div className="mt-1 text-red-500 text-xs">{errors.confirmPassword}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="mb-3">
          <Input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.mobileNumber && <div className="mt-1 text-red-500 text-xs">{errors.mobileNumber}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        
        {roleId === '3' && (
          <>
            <div className="mb-3">
              <Input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                placeholder="GST Number"
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="mb-3">
              <Input
                type="number"
                name="bookingCapacity"
                value={formData.bookingCapacity}
                onChange={handleChange}
                placeholder="Booking Capacity"
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </>
        )}
        {errors.vendorFields && <div className="mt-1 text-red-500 text-xs">{errors.vendorFields}</div>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition duration-200 text-sm font-semibold mt-4"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
