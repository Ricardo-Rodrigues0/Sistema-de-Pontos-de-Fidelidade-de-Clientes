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
                            <Link to="/login" className="btn btn-primary px-5   ">
                                Login
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
                                    <p className="text-dark">Considere também: Audi A3, Jeep Commander, Toyota Corolla, Chevrolet Equinox e Song Plus. <br></br> Descubra qual é o ideal para você!</p>
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

            <section className='section3'>
                <h1 className="mt-5 text-center">Conheça Nossos Produtos</h1>
                <p className="lead text-center mb-5">Confira os modelos disponíveis e os pontos necessários para resgatar o seu veículo!</p>

                <div className="container mt-5">
                    <div className="card-group  justify-content-center">
                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Hyundai HB20</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/hatch/HB2X.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Hyundai HB20" />
                                    <p className="card-text mt-3">Compacto e prático, o hatch é perfeito para o dia a dia, combinando agilidade e economia.</p>
                                    <p ><strong>Valor:</strong> 200 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Direção Elétrica, Ar-Condicionado, Bluetooth.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'silver', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'red', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <button type="button" className="btn btn btn-outline-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>200 pontos</strong>    
                                        </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Chevrolet Onix</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/hatch/ONIC.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Chevrolet Onix" />
                                    <p className="card-text mt-3">Um dos líderes de vendas, o Onix oferece conforto e tecnologia de ponta.</p>
                                    <p ><strong>Valor:</strong> 250 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Câmbio Automático, Sensor de Estacionamento, Tela Multimídia.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: '#545452', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'white', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <button type="button" className="btn btn btn-outline-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>250 pontos</strong>    
                                        </button>
                                </div>
                            </div>
                        </div>



                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Chevrolet S10</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/pick-up/S10X.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Chevrolet S10" />
                                    <p className="card-text mt-3">Combinando potência e conforto, a S10 é ideal para o trabalho e o lazer.</p>
                                    <p ><strong>Valor:</strong> 370 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Ar-Condicionado, Câmbio Automático, Sistema de Navegação.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: '#C8D0D8', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'red', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <button type="button" className="btn btn btn-outline-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>370 pontos</strong>    
                                        </button>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Fiat Toro</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/pick-up/TO4D.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Fiat Toro" />
                                    <p className="card-text mt-3">A Toro oferece um design moderno e funcionalidades inovadoras para o dia a dia.</p>
                                    <p ><strong>Valor:</strong> 330 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Central Multimídia, Câmera de Ré, Controle de Trilha.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'white', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: '#433634   ', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                    <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>330 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>







                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Toyota Corolla</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/premium/COLB.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Toyota Corolla" />
                                    <p className="card-text mt-3">Um dos sedans mais vendidos, combina conforto e tecnologia em um só carro.</p>
                                    <p ><strong>Valor:</strong> 400 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Assistência de Estacionamento, Conectividade, Ar-Condicionado Dual Zone.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'silver', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'white', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                    <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>400 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Audi A3</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/premium/AUD3.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Audi A3" />
                                    <p className="card-text mt-3">Um hatch premium que oferece performance e tecnologia avançada.</p>
                                    <p ><strong>Valor:</strong> 500 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Sistema de Som Bang & Olufsen, Controle de Climatização Automática.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'red', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'white', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                    <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>500 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Fiat Cronos</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/sedan/CROM.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Fiat Cronos" />
                                    <p className="card-text mt-3">O Cronos combina espaço, conforto e tecnologia em um design moderno.</p>
                                    <p ><strong>Valor:</strong> 270 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Tela Multimídia, Sensor de Estacionamento, Direção Elétrica, Painel Digital.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'red', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: '#CBCBCC', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                    <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>270 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Virtus</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/sedan/VIRF.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Virtus" />
                                    <p className="card-text mt-3">Um sedan espaçoso, ideal para quem busca conforto e tecnologia.</p>
                                    <p ><strong>Valor:</strong> 350 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Controle de Estabilidade, Assistente de Subida, Painel Digital.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'white', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: '#82847F', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                        <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>350 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-header text-center">
                                    <strong>Hyundai Creta</strong>
                                </div>
                                <div className="card-body d-flex flex-column text-center">
                                    <img src="/img/groupCar/suv/CRTA.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt="Hyundai Creta" />
                                    <p className="card-text mt-3">O Creta é um SUV que combina conforto e tecnologia em um só carro.</p>
                                    <p ><strong>Valor:</strong> 450 pontos</p>
                                    <p ><strong>Ano:</strong> 2023</p>
                                    <p ><strong>Características:</strong> Central Multimídia com Tela de 10", Câmera 360°, Assistência de Estacionamento.</p>
                                    <p ><strong>Cores Disponíveis:</strong></p>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-circle" style={{ backgroundColor: 'black', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'red', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                        <button className="btn btn-circle" style={{ backgroundColor: 'gray', border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                    </div>
                                    <div className="mt-auto">
                                    <button type="button" className="btn btn-success mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                        Resgatar por <strong>450 pontos</strong>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


                <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-success mx-3 mb-5 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal11">
                        Confira a variedade de produtos
                    </button>
                </div>








            </section>

            <section className='section2'>
                <img className='banner' src='/img/banner2.png' alt='Banner'></img>
                <h1 className="mt-5 text-center">Explore Nossa Variedade de Modelos de Carros</h1>
                <p className="lead text-center mb-5">Encontre o modelo que atende suas necessidades e comece a acumular pontos!</p>
                <div className="container mt-5">
                    <div className="row justify-content-center">

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card">
                                <div className="card-header text-center">
                                    Categoria Hatch
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Hyundai HB20</h5>
                                    <img src="/img/groupCar/hatch/HB2X.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }}
                                        alt="Hyundai HB20" />
                                    <p className="card-text mt-3">Compacto e prático, o hatch é perfeito para o dia a dia, combinando agilidade e economia.</p>
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        Confira outros modelos
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria Hatch</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body overflow-auto">
                                        <div className="carousel-modal">
                                            <div id="carouselExample" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <h4 className="text-dark text-center">Fiat Argo</h4>
                                                        <img src="/img/groupCar/hatch/ARGO.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Fiat Argo oferece uma experiência de condução divertida e ágil, perfeito para quem busca praticidade e conforto durante suas viagens.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">GOL</h4>
                                                        <img src="/img/groupCar/hatch/GOLC.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Volkswagen Gol é um carro versátil que se adapta facilmente a diferentes estilos de viagem, tornando-se uma escolha confiável para qualquer ocasião de aluguel.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>2 malas pequenas</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Hyundai HB20</h4>
                                                        <img src="/img/groupCar/hatch/HB2X.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Hyundai HB20 proporciona uma excelente experiência de viagem, ideal para quem deseja explorar novos destinos com segurança e conforto.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Renault Kwid</h4>
                                                        <img src="/img/groupCar/hatch/KWID.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Renault Kwid é uma ótima opção para quem busca um carro compacto e ágil, ideal para explorar a cidade com facilidade e estilo.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>1 malas pequenas</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Polo</h4>
                                                        <img src="/img/groupCar/hatch/POLO.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Volkswagen Polo oferece um equilíbrio perfeito entre design moderno e funcionalidade, tornando suas jornadas de aluguel mais agradáveis e sofisticadas.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet Onix</h4>
                                                        <img src="/img/groupCar/hatch/ONIC.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Chevrolet Onix é ideal para quem viaja em grupo, proporcionando espaço e conforto, além de ser perfeito para aventuras em família com o sistema de fidelidade.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>1 mala grande</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card">
                                <div className="card-header text-center">
                                    Categoria Picape
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Nissan Frontier</h5>
                                    <img src="/img/groupCar/pick-up/FRON.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }}
                                        alt="Nissan Frontier" />
                                    <p className="card-text mt-3">Força e versatilidade para encarar qualquer desafio, seja na cidade ou no campo.</p>
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        Confira outros modelos
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria Picape</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body overflow-auto">
                                        <div className="carousel-modal">
                                            <div id="carouselExample2" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <h4 className="text-dark text-center">Nissan Frontier</h4>
                                                        <img src="/img/groupCar/pick-up/FRON.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Nissan Frontier é ideal para quem busca robustez e conforto, perfeita para aventuras fora de estrada, garantindo uma experiência de aluguel que combina estilo e performance.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛠</span>
                                                                        <span>Suspensão elevada</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Mitsubishi L200</h4>
                                                        <img src="/img/groupCar/pick-up/L200.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Mitsubishi L200 é uma picape que oferece força e resistência, ideal para quem deseja explorar terrenos desafiadores com segurança e confiança durante suas jornadas.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>5 malas grandes</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet Montana</h4>
                                                        <img src="/img/groupCar/pick-up/MONP.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Chevrolet Montana é perfeita para quem procura uma picape compacta e versátil, ideal para aluguel em ambientes urbanos e rurais, garantindo agilidade e praticidade.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>Sistema de tração 4x4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet S10</h4>
                                                        <img src="/img/groupCar/pick-up/S10X.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Chevrolet S10 é uma picape que combina robustez e conforto, tornando suas viagens de aluguel uma experiência excepcional, seja na cidade ou em trilhas.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔋</span>
                                                                        <span>Motor turbo diesel</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Fiat Toro</h4>
                                                        <img src="/img/groupCar/pick-up/TO4D.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Fiat Toro é ideal para quem busca um estilo de vida ativo, oferecendo um design moderno e espaço interno confortável, perfeita para aluguel em aventuras urbanas e rurais.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Toyota Hilux</h4>
                                                        <img src="/img/groupCar/pick-up/TOYH.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">A Toyota Hilux é sinônimo de durabilidade e confiabilidade, perfeita para quem busca uma picape de alto desempenho em qualquer condição, ideal para viagens longas e aventuras</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">⚙</span>
                                                                        <span>Transmissão automática</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card">
                                <div className="card-header text-center">
                                    Categoria Sedan
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Fiat Cronos</h5>
                                    <img src="/img/groupCar/sedan/CROM.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }}
                                        alt="Fiat Cronos" />
                                    <p className="card-text mt-3">Com mais espaço e conforto, o sedan oferece elegância e desempenho para todas as suas viagens.</p>
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                        Confira outros modelos
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria Sedan</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body overflow-auto">
                                        <div className="carousel-modal">
                                            <div id="carouselExample3" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <h4 className="text-dark text-center">Fiat Cronos</h4>
                                                        <img src="/img/groupCar/sedan/CROM.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Fiat Cronos combina elegância e conforto, proporcionando uma experiência de aluguel refinada para quem aprecia um design moderno e sofisticado.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Hyundai HB20S</h4>
                                                        <img src="/img/groupCar/sedan/HB2C.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Hyundai HB20S é ideal para quem busca praticidade e conforto, perfeito para famílias que desejam um carro espaçoso e confortável para suas viagens.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">〽</span>
                                                                        <span>Espaço interno generoso</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet Onix</h4>
                                                        <img src="/img/groupCar/sedan/ONIS.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Chevrolet Onix Sedan é sinônimo de modernidade e tecnologia, oferecendo recursos avançados para uma experiência de aluguel conectada e confortável.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>3 malas grandes</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Nissan Sentra</h4>
                                                        <img src="/img/groupCar/sedan/SETA.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Nissan Setran é a escolha perfeita para quem precisa de um carro prático e espaçoso, ideal para viagens longas com família e amigos, garantindo conforto em cada trajeto.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>Amplo porta-malas</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Virtus</h4>
                                                        <img src="/img/groupCar/sedan/VIRF.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Volkswagen Virtus combina tecnologia de ponta e conforto, ideal para quem busca uma experiência de aluguel premium, perfeita para passeios e viagens de negócios.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🎶</span>
                                                                        <span>Sistema de som premium</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-3 mx-2">
                            <div className="card">
                                <div className="card-header text-center">
                                    Categoria Premium
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Audi A3</h5>
                                    <img src="/img/groupCar/premium/AUD3.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }}
                                        alt="Audi A3" />
                                    <p className="card-text mt-3">Luxo e sofisticação em cada detalhe, ideal para quem busca exclusividade e conforto premium.</p>
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                        Confira outros modelos
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria Premium</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body overflow-auto">
                                        <div className="carousel-modal">
                                            <div id="carouselExample4" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <h4 className="text-dark text-center">AUDI A3</h4>
                                                        <img src="/img/groupCar/premium/AUD3.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Audi A3 é a definição de sofisticação e performance, oferecendo uma experiência de direção envolvente e luxuosa para quem busca o melhor em aluguel.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Sistema de tração Quattro</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Jeep Commander</h4>
                                                        <img src="/img/groupCar/premium/CMDR.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Jeep Commander é perfeito para aventuras familiares, unindo espaço, conforto e uma capacidade off-road que o torna ideal para explorar novos destinos.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🌎</span>
                                                                        <span>Tração 4x4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Toyota Corolla</h4>
                                                        <img src="/img/groupCar/premium/COLB.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Toyota Corolla é conhecido pela sua confiabilidade e eficiência, sendo uma escolha inteligente para quem busca um carro econômico e confortável para o dia a dia.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">📊</span>
                                                                        <span>Tecnologia híbrida</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet Equinox</h4>
                                                        <img src="/img/groupCar/premium/EQBL.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Chevrolet Equinox é ideal para famílias que buscam espaço e conforto, perfeito para viagens longas ou para o uso diário com muito estilo e funcionalidade.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>5 malas pequenas</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Haval H6</h4>
                                                        <img src="/img/groupCar/premium/HAVA.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Haval H6 traz inovação e tecnologia de ponta, oferecendo segurança e conforto para quem procura um SUV moderno para suas aventuras urbanas e rurais.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Song Plus</h4>
                                                        <img src="/img/groupCar/premium/SONG.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Song Plus é uma opção inteligente e sustentável, ideal para quem valoriza eficiência energética e conforto, perfeito para quem quer alugar um carro ecológico e moderno.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔋</span>
                                                                        <span>Motor elétrico</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mb-5 mx-2">
                            <div className="card">
                                <div className="card-header text-center">
                                    Categoria SUV
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Fiat Fastback</h5>
                                    <img src="/img/groupCar/suv/FATB.png" className="img-fluid" style={{ height: '150px', objectFit: 'contain' }}
                                        alt="Fiat Fastback" />
                                    <p className="card-text mt-3">Robusto e espaçoso, o SUV é ideal para aventuras e momentos em família com segurança e estilo.</p>
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                        Confira outros modelos
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Categoria SUV</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body overflow-auto">
                                        <div className="carousel-modal">
                                            <div id="carouselExample5" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <h4 className="text-dark text-center">Hyundai Creta</h4>
                                                        <img src="/img/groupCar/suv/CRTA.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Hyundai Creta é perfeito para quem busca um SUV elegante e confortável, oferecendo tecnologia e praticidade para viagens urbanas e aventuras ao ar livre.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🗃</span>
                                                                        <span>Amplo espaço interno</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Fiat Fastback</h4>
                                                        <img src="/img/groupCar/suv/FATB.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Fiat Fastback é ideal para quem procura um carro com um visual dinâmico e sofisticado, oferecendo performance e estilo para os amantes de condução ágil.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🌟</span>
                                                                        <span>Design esportivo</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Nissan Kicks</h4>
                                                        <img src="/img/groupCar/suv/KICK.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Nissan Kicks combina design moderno e eficiência, tornando-se a escolha ideal para quem busca um SUV compacto e conectado, perfeito para o dia a dia</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚦</span>
                                                                        <span>ABS</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Nivus</h4>
                                                        <img src="/img/groupCar/suv/NIVU.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Volkswagen Nivus é ideal para quem busca um SUV versátil e cheio de recursos, oferecendo conforto e tecnologia para uma experiência de direção prática e divertida.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>2 malas grandes</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Fiat Pulse</h4>
                                                        <img src="/img/groupCar/suv/PLSE.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Fiat Pulse é perfeito para quem quer um carro moderno e divertido, combinando estilo e tecnologia para uma experiência de aluguel que se destaca nas ruas.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔒</span>
                                                                        <span>Trava elétrica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🎶</span>
                                                                        <span>Sistema de som premium</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <h4 className="text-dark text-center">Chevrolet Tracker</h4>
                                                        <img src="/img/groupCar/suv/TRAT.png" className="img-fluid d-block mx-auto" style={{ height: '200px', objectFit: 'contain' }} alt="..." />

                                                        <div className="text-center d-none d-md-block rounded mt-5">
                                                            <p className="text-dark">O Chevrolet Tracker oferece uma combinação de estilo e segurança, ideal para quem procura um SUV compacto e confiável para suas aventuras urbanas e viagens.</p><br></br>
                                                        </div>

                                                        <div className="container">
                                                            <div className="row row-cols-2 g-1">
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚪</span>
                                                                        <span>4 portas</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">❄</span>
                                                                        <span>Ar-condicionado</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🔌</span>
                                                                        <span>Vidro elétrico</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🚗</span>
                                                                        <span>Direção hidráulica</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🛡</span>
                                                                        <span>Air bag duplo</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="p-3 border rounded d-flex align-items-center justify-content-start">
                                                                        <span className="me-2">🧳</span>
                                                                        <span>3 malas grande</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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