import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [codeInput, setCodeInput] = useState('');
  const [message, setMessage] = useState('');

  const handleRedeemCode = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/redeem-code', { codeName: codeInput });
      setMessage(`Código resgatado com sucesso: ${response.data.code.name}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message); // Exibe a mensagem de erro recebida do backend
      } else {
        setMessage('Erro ao tentar resgatar o código');
      }
    }
  };

  return (
    <div className='mainHome'>
      <nav className="navbar navbar-expand-lg">
        {/* Código de navegação */}
      </nav>

      <section>
        <div className='linha-horizontal'></div>

        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <h2 className="mt-5 mb-5 text-center">Resgate seu Código</h2>
              <form onSubmit={handleRedeemCode}>

                <div className="form-outline mb-4">
                  <label className="form-label">Código</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Digite seu Código"
                    required
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', marginBottom: '1.5rem' }}
                  >
                    Resgatar Código
                  </button>
                </div>
              </form>

              {/* Exibindo a mensagem de sucesso ou erro */}
              {message && <p className="text-center">{message}</p>}
            </div>
          </div>
        </div>
        <div className='linha-horizontal'></div>
      </section>
    </div>
  );
}

export default Home;
