// GenerateCode.js (Atualizado com CodeList)
import React, { useState } from 'react';
import CodeList from './CodeList';

function GenerateCode() {
  const [codeName, setCodeName] = useState('');
  const [usesLimit, setUsesLimit] = useState('');
  const [expiryTime, setExpiryTime] = useState('');
  const [generatedCodes, setGeneratedCodes] = useState([]);

  const handleGenerateCode = () => {
    const newCode = {
      name: codeName || `CODE-${Math.floor(Math.random() * 100000)}`,
      usesLimit: usesLimit || 'Unlimited',
      expiryTime: expiryTime || 'No Expiration',
    };

    setGeneratedCodes([...generatedCodes, newCode]);
    setCodeName('');
    setUsesLimit('');
    setExpiryTime('');
  };

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
        <button type="button" className="btn btn-primary mt-3" onClick={handleGenerateCode}>
          Gerar Código
        </button>
      </form>

      <CodeList codes={generatedCodes} />
    </div>
  );
}

export default GenerateCode;
