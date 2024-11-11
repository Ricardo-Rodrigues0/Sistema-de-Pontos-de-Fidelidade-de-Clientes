import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Envia os dados de cadastro para o servidor
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
      });

      setSuccess(response.data.success); // Exibe a mensagem de sucesso

      // Redireciona para a página de login após o sucesso no cadastro
      setTimeout(() => {
        history.push('/login');
      }, 2000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message); // Exibe a mensagem de erro se houver
      } else {
        setError('Erro desconhecido. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/login">Faça login aqui</a>
      </p>
    </div>
  );
};

export default Signup;
