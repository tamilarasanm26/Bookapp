import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import './register.css'; // Import register.css for styles

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      if (password.length < 6) {
        setErrorMessage('Password should be at least 6 characters long.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        navigate('/home');
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}

      <main className="register-container">
        <div className="register-form">
          <div className="register-heading">
            <h3 className="text-2xl font-semibold text-gray-900">Create a New Account</h3>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="register-input"
              />
            </div>

            {errorMessage && <span className="register-error">{errorMessage}</span>}

            <button
              type="submit"
              disabled={isRegistering}
              id='btn'
              className={`register-submit ${isRegistering ? 'cursor-not-allowed bg-gray-300' : 'hover:bg-indigo-700'}`}
            >
              {isRegistering ? 'Signing Up...' : 'Sign Up'}
            </button>
            <div className="register-login-link">
              <p className="text-sm text-center text-gray-700">
                Already have an account? {' '}
                <Link to={'/login'} className="register-login-link">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
