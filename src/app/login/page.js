"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../utils/api';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await login({ username, password });
            const token = response.key || response.token || response.auth_token;
            
            if (token) {
                localStorage.setItem('token', token);  // Store the token in localStorage
                router.push('/');  // Redirect to the homepage or a protected route
            } else {
                setError('Login failed: No token received.');
            }
        } catch (err) {
            setError('Login failed: ' + (err.response?.data?.non_field_errors?.join(' ') || 'An error occurred.'));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h1 className="text-2xl mb-4">Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="mb-4 p-2 border rounded w-full"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="mb-4 p-2 border rounded w-full"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Login
            </button>
        </form>
    );
}
