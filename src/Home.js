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
                                <img src="/img/groupCar/premium/HAVA.png" className="d-block mx-auto w-10" alt="Haval H6" />

                                <div className="text-center d-none d-md-block rounded mt-5">
                                    <h4 className="text-dark">Categoria Premium - Haval H6</h4>
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
                <img className='banner' src='/img/banner2.png' alt='Banner'></img>





                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-sm-3 mb-3 mx-2">
                            <div class="card">
                                <div class="card-header text-center">
                                    Categoria Hatch
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hyundai HB20</h5>
                                    <img src="/img/groupCar/hatch/HB2X.png" class="img-fluid" alt="Hyundai HB20" />
                                    <p class="card-text mt-3">Compacto e prático, o hatch é perfeito para o dia a dia, combinando agilidade e economia.</p>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        Ver carros disponíveis
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...1
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="col-sm-3 mb-3 mx-2">
                            <div class="card">
                                <div class="card-header text-center">
                                    Categoria Picape
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Nissan Frontier</h5>
                                    <img src="/img/groupCar/pick-up/FRON.png" class="img-fluid" alt="Nissan Frontier" />
                                    <p class="card-text mt-3">Força e versatilidade para encarar qualquer desafio, seja na cidade ou no campo.</p>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        Ver carros disponíveis
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...2
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class="col-sm-3 mb-3 mx-2">
                            <div class="card">
                                <div class="card-header text-center">
                                    Categoria Sedan
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fiat Cronos</h5>
                                    <img src="/img/groupCar/sedan/CROM.png" class="img-fluid" alt="Fiat Cronos" />
                                    <p class="card-text mt-3">Com mais espaço e conforto, o sedan oferece elegância e desempenho para todas as suas viagens.</p>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                        Ver carros disponíveis
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...3
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div class="col-sm-3 mb-3 mx-2">
                            <div class="card">
                                <div class="card-header text-center">
                                    Categoria Prime
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hyundai HB20</h5>
                                    <img src="/img/groupCar/hatch/hb2x.png" class="img-fluid" alt="Fiat Argo" />
                                    <p class="card-text mt-3">Compacto e prático, o hatch é perfeito para o dia a dia, combinando agilidade e economia.</p>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        Ver carros disponíveis
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...1
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class="col-sm-3 mb-3 mx-2">
                            <div class="card">
                                <div class="card-header text-center">
                                    Categoria Hatch
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Hyundai HB20</h5>
                                    <img src="/img/groupCar/hatch/hb2x.png" class="img-fluid" alt="Fiat Argo" />
                                    <p class="card-text mt-3">Compacto e prático, o hatch é perfeito para o dia a dia, combinando agilidade e economia.</p>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        Ver carros disponíveis
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...1
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


            </section>




        </div>

    );
}

export default Home;
