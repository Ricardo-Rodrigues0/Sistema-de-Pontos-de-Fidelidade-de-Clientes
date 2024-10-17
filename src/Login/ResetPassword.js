import React, { useState } from 'react';
import { auth } from '../Database/firebase'; // Ajuste o caminho conforme necessário
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, Link} from 'react-router-dom';
import '../Style/styleLogin.css';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setMessage('');
    
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('E-mail de redefinição de senha enviado com sucesso! Verifique sua caixa de entrada.');
    
            // Adicione um atraso antes de redirecionar
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Redireciona após 2 segundos
        } catch (error) {
            setMessage('Erro ao enviar e-mail: ' + error.message);
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
                        <form onSubmit={handleResetPassword}>
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

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '1.5rem' }}
                                >
                                    Redefinir senha
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                Lembrou da sua senha? <Link to="/login" className="link-success">Acesse sua conta.</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fooster d-flex flex-column flex-md-row align-items-center justify-content-between py-4 px-4 px-xl-5 bg-success">
                <div className="logo">
                    <img src='/img/localiza-logo.svg' alt='Logo Localiza' />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </section>
    );
}

export default ResetPassword;
