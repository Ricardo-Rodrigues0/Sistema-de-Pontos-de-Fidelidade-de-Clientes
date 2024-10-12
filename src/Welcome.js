// Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Database/firebase'; 

function Welcome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                navigate('/'); // Redireciona para a tela inicial após logout
            })
            .catch((error) => {
                console.error("Erro ao sair: ", error);
            });
    };

    return (
        <div>
            <h1>Bem-vindo ao Sistema de Fidelidade!</h1>
            <p>Você está logado.</p>
            {/* Botão Sair */}
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Welcome;
