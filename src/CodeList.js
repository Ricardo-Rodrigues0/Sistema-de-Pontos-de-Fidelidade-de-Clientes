import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CodeList() {
    const [generatedCodes, setGeneratedCodes] = useState([]);

    const fetchCodes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/codes');
            setGeneratedCodes(response.data);
        } catch (error) {
            console.error('Erro ao buscar os códigos:', error);
        }
    };

    const handleDeleteCode = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/delete-code/${id}`);
            setGeneratedCodes(generatedCodes.filter(code => code.id !== id));
        } catch (error) {
            console.error('Erro ao deletar o código:', error);
        }
    };

    useEffect(() => {
        fetchCodes();
    }, []);

    return (
        <div className='mainHome'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/img/localiza-logo.svg" alt="Localiza Logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Início
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./points">
                                    Regastar código
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Produtos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Grupos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="./GenerateCode">
                                    Gerar Código
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./CodeList">
                                    Códigos
                                </a>
                            </li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <Link to="/login" className="btn btn-primary px-5">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <div className='linha-horizontal'></div>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Códigos Gerados</h2>
                <div className="row">
                    {generatedCodes.map((code) => (
                        <div className="col-md-4" key={code.id}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{code.name}</h5>
                                    <p className="card-text">Usos Restantes: {code.usesLimit}</p>
                                    <p className="card-text">Expira em: {new Date(code.expiryTime).toLocaleDateString()}</p>
                                    <p className="card-text">Pontos: {code.points}</p>
                                    <button className="btn btn-danger" onClick={() => handleDeleteCode(code.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='linha-horizontal'></div>

            <div className="fooster d-flex flex-column flex-md-row align-items-center justify-content-between py-4 px-4 px-xl-5 bg-success fixed-bottom">
                <div className="logo">
                    <img src="/img/localiza-logo.svg" alt="Logo Localiza" />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </div>
    );
}

export default CodeList;
