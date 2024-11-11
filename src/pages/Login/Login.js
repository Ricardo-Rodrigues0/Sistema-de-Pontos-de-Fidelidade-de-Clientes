import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUserByEmail } from '../../services/users';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const result = await getUserByEmail(email, password);
            if (result.error) {
                setMessage(result.error);
            } else {
                setMessage(result.success);
                navigate('/welcome'); // Redireciona após login bem-sucedido
            }
        } catch (error) {
            setMessage('Erro ao fazer login.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {message && <p>{message}</p>}
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            <Link to="/signup">Criar uma conta</Link>
        </form>
    );
}

export default Login;
