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
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
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
                <img className='banner' src='/img/banner.png' alt='Banner'></img>
                <h1 className="mt-5 text-center">Conheça as Diversas Categorias do Programa Fidelidade</h1>
                <p className="lead text-center mb-5">Escolha o modelo que mais combina com você e acumule pontos!</p>


                <div className="carousel-container">
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








            <section className='section3'>
    <h1 className="mt-5 text-center">Explore Novos Horizontes com Seu Carro Alugado!</h1>
    <p className="lead text-center mb-5">Encontre o destino perfeito para sua próxima aventura em família e acumule ainda mais pontos.</p>

    <div className="carousel-container">
        <div id="carouselExampleCaptions" className="carousel2 carousel slide">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="/img/viagens/gramado.png" className="d-block mx-auto w-10" alt="Gramado, Rio Grande do Sul" />
                    <div className="carousel-caption d-md-block">
                        <h4 className="text-dark">Gramado, Rio Grande do Sul</h4>
                        <p className="text-dark">Gramado, com sua arquitetura europeia, gastronomia e clima serrano, é um dos destinos mais visitados do Brasil. Ideal para famílias, oferece parques, museus e o famoso evento Natal Luz. Explore a Serra Gaúcha com conforto e viva momentos inesquecíveis.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/img/viagens/gramado.png" className="d-block mx-auto w-10" alt="Chevrolet S10" />
                    <div className="carousel-caption d-md-block">
                        <h4 className="text-dark">Categoria Picape - Chevrolet S10</h4>
                        <p className="text-dark">Considere também: Nissan Frontier, Mitsubishi L200, Montana, Fiat Toro e Toyota Hilux.  Descubra qual é o ideal para você!</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/img/viagens/gramado.png" className="d-block mx-auto w-10" alt="Chevrolet S10" />
                    <div className="carousel-caption d-md-block">
                        <h4 className="text-dark">Categoria Picape - Chevrolet S10</h4>
                        <p className="text-dark">Considere também: Nissan Frontier, Mitsubishi L200, Montana, Fiat Toro e Toyota Hilux.  Descubra qual é o ideal para você!</p>
                    </div>
                </div>

            </div>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    </div>
</section>




        </div>
    );
}

export default Home;
