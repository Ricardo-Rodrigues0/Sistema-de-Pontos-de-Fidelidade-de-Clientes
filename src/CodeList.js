// CodeList.js
import React from 'react';

function CodeList({ codes }) {
  return (
    <div className="code-list">
      <h3>Códigos Disponíveis</h3>
      <ul className="list-group">
        {codes.length > 0 ? (
          codes.map((code, index) => (
            <li key={index} className="list-group-item">
              <strong>Código:</strong> {code.name} <br />
              <strong>Usos:</strong> {code.usesLimit} <br />
              <strong>Expira em:</strong> {code.expiryTime} dias
            </li>
          ))
        ) : (
          <li className="list-group-item">Nenhum código gerado ainda.</li>
        )}
      </ul>
    </div>
  );
}

export default CodeList;
