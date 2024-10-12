// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

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


            <h1 className="mt-5">Bem-vindo à Sorveteria!</h1>
            <p className="lead">Escolha a sua sobremesa e comece a acumular pontos!</p>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <img src="/img/img1.png" className="card-img-top" alt="Sorvete 1" />
                        <div className="card-body">
                            <h5 className="card-title">Sorvete de Chocolate</h5>
                            <p className="card-text">Delicioso sorvete de chocolate feito com ingredientes frescos.</p>
                            <button className="btn btn-success">Resgatar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/img/img1.png" className="card-img-top" alt="Sorvete 2" />
                        <div className="card-body">
                            <h5 className="card-title">Sorvete de Morango</h5>
                            <p className="card-text">Sorvete de morango cremoso, perfeito para o verão!</p>
                            <button className="btn btn-success">Resgatar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/img/img1.png" className="card-img-top" alt="Sorvete 3" />
                        <div className="card-body">
                            <h5 className="card-title">Sorvete de Baunilha</h5>
                            <p className="card-text">O clássico sorvete de baunilha, sempre uma ótima escolha.</p>
                            <button className="btn btn-success">Resgatar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
