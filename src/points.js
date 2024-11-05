// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style/stylePoitns.css';



function Home() {
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
                                <a className="nav-link active" aria-current="page" href="./Points">
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
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <Link to="/login" className="btn btn-primary px-5   ">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>





            <section className="vh-100">

                
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-lg-2 col-xl-4">
                        <img className='form-img' src='/img/localiza-logo2.png' alt='' />
                        <form>

                            <div className="form-outline mb-4">
                                <label className="form-label">Código</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg text-center"
                                    placeholder="Digite seu código"
                                    required
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
                    </div>
                </div>
            </div>
        </section>

            <div className="fooster d-flex flex-column flex-md-row align-items-center justify-content-between py-4 px-4 px-xl-5 bg-success">
                <div className="logo">
                    <img src='/img/localiza-logo.svg' alt='Logo Localiza' />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </div>

    );
}

export default Home;