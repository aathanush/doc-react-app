import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navigation = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )}
        </div>
    );
};

export default Navigation;
