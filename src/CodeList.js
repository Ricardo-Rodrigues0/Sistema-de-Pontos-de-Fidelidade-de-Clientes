import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="container">
      <h2>Códigos Gerados</h2>
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

export default CodeList;
