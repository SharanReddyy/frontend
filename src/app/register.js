import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users/register/', {
                username,
                email,
                password1,
                password2,
            }, { withCredentials: true });

            router.push('/');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
