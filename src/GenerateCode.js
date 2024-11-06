import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GenerateCode() {
  const [codeName, setCodeName] = useState('');
  const [usesLimit, setUsesLimit] = useState('');  // Vai ser tratado no handleGenerateCode
  const [expiryTime, setExpiryTime] = useState('');  // Vai ser tratado no handleGenerateCode
  const [points, setPoints] = useState(''); // Novo estado para pontos
  const [generatedCodes, setGeneratedCodes] = useState([]);

  const handleGenerateCode = async () => {
    const newCode = {
      name: codeName || `CODE-${Math.floor(Math.random() * 100000)}`,
      // Se usesLimit estiver vazio ou for 'Unlimited', será 1
      usesLimit: (usesLimit === '' || usesLimit.toLowerCase() === 'unlimited') ? 1 : parseInt(usesLimit),
      // Se expiryTime estiver vazio, será 1 (dia)
      expiryTime: expiryTime ? parseInt(expiryTime) : 1, // Em dias
      points: parseInt(points) || 0, // Adicionando os pontos
    };

    try {
      const response = await axios.post('http://localhost:5000/generate-code', newCode);
      setGeneratedCodes([...generatedCodes, response.data]);
      setCodeName('');
      setUsesLimit('');
      setExpiryTime('');
      setPoints(''); // Limpa o input de pontos
    } catch (error) {
      console.error('Erro ao gerar o código:', error);
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
    <div className="container">
      <h2>Gerar Novo Código</h2>
      <form>
        <div className="form-group">
          <label>Nome do Código</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do código (opcional)"
            value={codeName}
            onChange={(e) => setCodeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Limite de Usos</label>
          <input
            type="number"
            className="form-control"
            placeholder="Digite o limite de usos"
            value={usesLimit}
            onChange={(e) => setUsesLimit(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tempo de Expiração (em dias)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Digite o tempo de expiração"
            value={expiryTime}
            onChange={(e) => setExpiryTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pontos do Código</label>
          <input
            type="number"
            className="form-control"
            placeholder="Digite a quantidade de pontos"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={handleGenerateCode}>
          Gerar Código
        </button>
      </form>

      <h3>Códigos Gerados</h3>
      <ul>
        {generatedCodes.map((code) => (
          <li key={code.id}>
            {code.name} - Usos Restantes: {code.usesLimit} - Expira em: {new Date(code.expiryTime).toLocaleDateString()} - Pontos: {code.points}
            <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDeleteCode(code.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenerateCode;
