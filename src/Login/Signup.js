import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/Style/styleLogin.css';    

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Usuário criado com sucesso!');
            navigate('/welcome'); // Redireciona para a tela de boas-vindas após cadastro
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setMessage('O email já está em uso. Por favor, faça login ou use outro email.');
            } else {
                setMessage('Erro ao criar conta: ' + error.message);
            }
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setMessage('Login com Google bem-sucedido!');
            navigate('/welcome'); // Redireciona após login com Google
        } catch (error) {
            setMessage('Erro ao fazer login com Google: ' + error.message);
        }
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="hide-img col-md-6 col-lg-5 col-xl-4">
                        <img src='./image/BannerLogos/imgLogin.gif' alt='' className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <img className='form-img' src='./image/BannerLogos/imgLogo2.png' alt='' />
                        <form onSubmit={handleSignup}>
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

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '1.5rem' }}
                                >
                                    Cadastrar
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Já possui uma conta na Localiza? <Link to="/login" className="link-success">Acesse sua conta.</Link>
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
                    <img src='./image/BannerLogos/imgLogo1.svg' alt='Logo Localiza' />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </section>
    );
}

export default Signup;
