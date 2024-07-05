import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        await doSignOut();
        navigate('/login'); // Redirect to the login page after signing out
    };

    return (
        // <nav className='header-nav'>
            <div className='header-container'>
                {
                    userLoggedIn
                        ? <button className='btn' onClick={handleLogout} >Logout</button>
                        : <>
                          <button className='btn'>  <Link  to={'/login'}>Login</Link></button>

                           <button className='btn'> <Link  to={'/register'}>Register New Account</Link></button>
                        </>
                }
            </div>
        // </nav>
    );
};

export default Header;
