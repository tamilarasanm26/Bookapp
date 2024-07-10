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
        <nav className='header-nav'>
            <div className='header-container'>
                <div className='nav-left'>
                    {!userLoggedIn && (
                        <>
                            <Link className='btn link-btn' to='/login'>Login</Link>
                            <Link className='btn link-btn' to='/register'>Register New Account</Link>
                        </>
                    )}
                </div>
                {userLoggedIn && (
                    <div className='nav-right'>
                        <button className='btn logout-btn' onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
