import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function GenerateCode() {
    const [codeName, setCodeName] = useState('');
    const [usesLimit, setUsesLimit] = useState('');
    const [expiryTime, setExpiryTime] = useState('');
    const [points, setPoints] = useState('');
    const [generatedCodes, setGeneratedCodes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    const handleGenerateCode = async () => {
        const newCode = {
            name: codeName || `CODE-${Math.floor(Math.random() * 100000)}`,
            usesLimit: (usesLimit === '' || usesLimit.toLowerCase() === 'unlimited') ? 1 : parseInt(usesLimit),
            expiryTime: expiryTime ? parseInt(expiryTime) : 1,
            points: parseInt(points) || 0,
        };

        try {
            const response = await axios.post('http://localhost:5000/generate-code', newCode);
            console.log('Resposta da API:', response.data); // Verificar o que está sendo retornado pela API
            
            if (response.data.status === "success") {
                setGeneratedCodes([...generatedCodes, response.data]);
                setAlertMessage(`Código "${response.data.name}" gerado com sucesso!`);
            } else {
                setAlertMessage("Erro ao gerar o código.");
            }
            setShowAlert(true);

            // Limpar os campos do formulário após o código ser gerado
            setCodeName('');
            setUsesLimit('');
            setExpiryTime('');
            setPoints('');

            // Esconder o alerta após 5 segundos
            setTimeout(() => setShowAlert(false), 5000);
        } catch (error) {
            console.error('Erro ao gerar o código:', error);
            setAlertMessage("Erro ao gerar o código. Verifique o console para mais detalhes.");
            setShowAlert(true);
        }
    };

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
                                <a className="nav-link active" aria-current="page" href="/">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./points">Resgatar código</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Grupos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="./GenerateCode">Gerar Código</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./CodeList">Códigos</a>
                            </li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <Link to="/login" className="btn btn-primary px-5">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Alerta de sucesso ou erro */}
            {showAlert && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <p>{alertMessage}</p>
                </div>
            )}

            <section>
                <div className='linha-horizontal'></div>

                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="hide-img col-md-6 col-lg-5 col-xl-4">
                            <img src='/img/Binary-code.gif' alt='' className="mb-5 img-fluid" />
                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <h2 className="mt-5 mb-5 text-center">Gere seu Código</h2>
                            <form>
                                <div className="form-outline mb-2">
                                    <label className="form-label">Nome do Código</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Digite o nome do código (opcional)"
                                        value={codeName}
                                        onChange={(e) => setCodeName(e.target.value)}
                                    />
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label">Limite de Usos</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Digite o limite de usos"
                                        value={usesLimit}
                                        onChange={(e) => setUsesLimit(e.target.value)}
                                    />
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label">Tempo de Expiração (em dias)</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Digite o tempo de expiração"
                                        value={expiryTime}
                                        onChange={(e) => setExpiryTime(e.target.value)}
                                    />
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label">Pontos do Código</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Digite a quantidade de pontos"
                                        value={points}
                                        onChange={(e) => setPoints(e.target.value)}
                                    />
                                </div>
                                <div className="btn-group mt-3" role="group" aria-label="Botões de ação">
                                    <button type="button" className="btn btn-success" onClick={handleGenerateCode}>Gerar Código</button>
                                    <button type="submit" className="btn btn-secondary" onClick={() => navigate('/codelist')}>Visualizar Códigos Gerados</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='linha-horizontal'></div>
            </section>

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

export default GenerateCode;
