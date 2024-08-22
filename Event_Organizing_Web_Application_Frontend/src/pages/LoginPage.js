import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../store/actions/authActions';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { validateEmail, validatePassword } from '../utils/validations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    setErrors({});
    
    
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      navigate('/'); 
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 mt-1 text-xs sm:text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 mt-1 text-xs sm:text-sm">{errors.password}</p>}
          </div>
          {error && <p className="text-red-500 mb-4 text-xs sm:text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 sm:p-3 rounded hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <div className="mt-4 text-center text-xs sm:text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-center text-xs sm:text-sm">
          <Link to="/register" className="text-blue-500 hover:underline">
            New here? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
