// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style/styleHome.css';

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
                                <a className="nav-link active" aria-current="page" href="/">
                                    Regastar código
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Histórico
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Grupos
                                </a>
                            </li>
                        </ul>
                        <div>
                            <Link to="/login" className="btn btn-primary mr-2">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-secondary">
                                Cadastro
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <section className='section1'>
                <img className='banner' src='/img/banner.png'></img>
                <h1 className="mt-5 text-center">Conheça as Diversas Categorias do Programa Fidelidade</h1>
                <p className="lead text-center mb-5">Escolha o modelo que mais combina com você e acumule pontos!</p>


                <div class="carousel-container">
                    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/img/groupCar/hatch/ARGO.png" className="d-block mx-auto w-10" alt="Fiat Argo" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Hatch - Fiat Argo</h4>
                                    <p className="text-dark">Considere também: Gol, Hyundai HB20, Renault Kwid, Onix e Polo. <br></br> Descubra qual é o ideal para você!</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="/img/groupCar/pick-up/S10X.png" className="d-block mx-auto w-10" alt="Chevrolet S10" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Picape - Chevrolet S10</h4>
                                    <p className="text-dark">Considere também: Nissan Frontier, Mitsubishi L200, Montana, Fiat Toro e Toyota Hilux. <br></br> Descubra qual é o ideal para você!</p>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <img src="/img/groupCar/prime/HAVA.png" className="d-block mx-auto w-10" alt="Haval H6" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Prime - Haval H6</h4>
                                    <p className="text-dark">Considere também: Audi A3, Jeep Commander, Toyota Corolla, Equinox e Song Plus. <br></br> Descubra qual é o ideal para você!</p>
                                </div>

                            </div>


                            <div className="carousel-item">
                                <img src="/img/groupCar/sedan/SETA.png" className="d-block mx-auto w-10" alt="Nissan Sentra" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Sedan - Nissan Sentra</h4>
                                    <p className="text-dark">Considere também: Fiat Cronos, Hyundai HB20, Onix, Virtus. <br></br> Descubra qual é o ideal para você!</p>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <img src="/img/groupCar/suv/CRTA.png" className="d-block mx-auto w-10" alt="Hyundai Creta" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Suv - Hyundai Creta</h4>
                                    <p className="text-dark">Considere também: Fiat Fastback, Nissan Kicks, Nivus Highline, Fiat Pulse e Chevrolet Tracker. <br></br> Descubra qual é o ideal para você!</p>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </section>























            <section className='section2'>

                
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
