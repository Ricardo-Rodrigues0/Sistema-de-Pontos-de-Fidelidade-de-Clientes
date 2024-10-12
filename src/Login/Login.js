import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../Database/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../Style/styleLogin.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // Estado para "Lembre-me"
    const navigate = useNavigate();

    // Carregar email e senha do localStorage ao montar o componente
    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        const savedPassword = localStorage.getItem('rememberedPassword'); // Para senha
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true); // Marca a caixa de seleção
        }
        if (savedPassword) {
            setPassword(savedPassword); // Preenche a senha
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Login realizado com sucesso!');

            // Salvar ou limpar email e senha no localStorage com base no "Lembre-me"
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', password); // Salva a senha
            } else {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword'); // Remove a senha
            }

            navigate('/welcome');
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setMessage('Senha incorreta. Tente novamente.');
            } else if (error.code === 'auth/user-not-found') {
                setMessage('Usuário não encontrado. Verifique o email ou cadastre-se.');
            } else {
                setMessage('Erro ao fazer login: ' + error.message);
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setMessage('Login com Google realizado com sucesso!');
            navigate('/welcome');
        } catch (error) {
            console.error("Erro ao fazer login com Google: ", error);
            setMessage('Erro ao fazer login com Google: ' + error.message);
        }
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="hide-img col-md-6 col-lg-5 col-xl-4">
                        <img src='/img/City-driver.gif' alt='' className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <img className='form-img' src='/img/localiza-logo2.png' alt='' />
                        <form onSubmit={handleLogin}>
                            {message && <p>{message}</p>}

                            <div className="form-outline mb-4">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe} // Verifica se "Lembre-me" está ativado
                                        onChange={(e) => setRememberMe(e.target.checked)} // Atualiza o estado
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Lembre-me
                                    </label>
                                </div>
                                <Link to="/ResetPassword" className="text-body">Esqueceu a senha?</Link>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '1.5rem' }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Deseja criar uma nova conta? <Link to="/signup" className="link-success">Cadastre-se</Link>
                                </p>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">
                                    <button
                                        type="button"
                                        className="btn btn-success btn-floating mx-1"
                                        title='Entre utilizando o Google'
                                        onClick={handleGoogleLogin}
                                    >
                                        <i className="bi bi-google"></i>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fooster d-flex flex-column flex-md-row align-items-center justify-content-between py-4 px-4 px-xl-5 bg-success">
                <div className="logo">
                    <img src='/img/localiza-logo.png' alt='Logo Localiza' />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </section>
    );
}

export default Login;
