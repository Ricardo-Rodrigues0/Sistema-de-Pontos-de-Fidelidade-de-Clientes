// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style/styleHome.css';

function Home() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/img/localiza-logo.png" alt="" width="220" height="50" class="d-inline-block align-text-center" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Início
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
                <h1 className="mt-5 text-center">Conheça nossos carros da categoria Prime</h1>
                <p className="lead text-center mb-5">Escolha o seu modelo favorito e acumule pontos!</p>

                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/groupCar/prime/HAVA.png" className="d-block mx-auto w-50" alt="Haval H6" />

                            <div className="text-center p-3 mb-5 d-none d-md-block bg-dark bg-opacity-50 p-3 rounded mt-5 mt-5">
                                <h4 className="text-white">Haval H6</h4>
                                <p className="text-white">Potência e inovação em cada detalhe.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="/img/groupCar/prime/CMDR.png" className="d-block mx-auto w-50" alt="Jeep Commander" />

                            <div className="text-center p-3 mb-5 d-none d-md-block bg-dark bg-opacity-50 p-3 rounded mt-5 mt-5">
                                <h4 className="text-white">Jeep Commander</h4>
                                <p className="text-white">Aventura e luxo em perfeita harmonia.</p>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img src="/img/groupCar/prime/COLB.png" className="d-block mx-auto w-50" alt="Toyota Corolla" />

                            <div className="text-center p-3 mb-5 d-none d-md-block bg-dark bg-opacity-50 p-3 rounded mt-5 mt-5">
                                <h4 className="text-white">Toyota Corolla</h4>
                                <p className="text-white">Sofisticação e eficiência para o dia a dia.</p>
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

            </section>























            <section className='section2'>

                <div class="card-group">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
