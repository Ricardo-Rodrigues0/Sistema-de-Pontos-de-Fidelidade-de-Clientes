import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    // Lista de produtos com categorias
    const products = [
        { name: 'Hyundai HB20', img: '/image/groupCar/hatch/HB2X.png', price: 200, year: 2023, features: 'Direção Elétrica, Ar-Condicionado, Bluetooth', colors: ['black', 'silver', 'red'], category: 'hatch' },
        { name: 'Chevrolet Onix', img: '/image/groupCar/hatch/ONIC.png', price: 250, year: 2023, features: 'Câmbio Automático, Sensor de Estacionamento, Tela Multimídia', colors: ['black', '#545452', 'white'], category: 'hatch' },
        { name: 'Chevrolet S10', img: '/image/groupCar/pick-up/S10X.png', price: 370, year: 2023, features: 'Ar-Condicionado, Câmbio Automático, Sistema de Navegação', colors: ['black', '#C8D0D8', 'red'], category: 'pickup' },
        { name: 'Fiat Toro', img: '/image/groupCar/pick-up/TO4D.png', price: 330, year: 2023, features: 'Central Multimídia, Câmera de Ré, Controle de Trilha', colors: ['black', 'white', '#433634'], category: 'pickup' },
        { name: 'Toyota Corolla', img: '/image/groupCar/premium/COLB.png', price: 400, year: 2023, features: 'Assistência de Estacionamento, Conectividade, Ar-Condicionado', colors: ['black', 'silver', 'white'], category: 'premium' },
        { name: 'Audi A3', img: '/image/groupCar/premium/AUD3.png', price: 500, year: 2023, features: 'Performance, Sistema de Navegação e tecnologia avançada', colors: ['black', 'blue', 'white'], category: 'premium' }
    ];

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Função para mudar a categoria selecionada
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reinicia para a primeira página ao mudar o filtro
    };

    // Filtra produtos pela categoria selecionada
    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

    // Calcula os itens para a página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Calcula o número total de páginas
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Função para mudar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='mainHome'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./image/BannerLogos/imgLogo1.svg" alt="Localiza Logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Início</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="./points">Resgatar código</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Produtos</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Grupos</a></li>
                            <li className="nav-item"><a className="nav-link active" href="./GenerateCode">Gerar Código</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="./CodeList">CodeList</a></li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <Link to="/login" className="btn btn-primary px-5">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="section3">
                <div className="container mt-3">
                    <h2>Filtrar por Categoria</h2>
                    <div className="btn-group" role="group">
                        <button className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleCategoryChange('all')}>Todos</button>
                        <button className={`btn ${selectedCategory === 'hatch' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleCategoryChange('hatch')}>Hatch</button>
                        <button className={`btn ${selectedCategory === 'pickup' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleCategoryChange('pickup')}>Pickup</button>
                        <button className={`btn ${selectedCategory === 'premium' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleCategoryChange('premium')}>Premium</button>
                    </div>
                </div>

                <h1 className="mt-5 text-center">Conheça Nossos Produtos</h1>
                <p className="lead text-center mb-5">Confira os modelos disponíveis e os pontos necessários para resgatar o seu veículo!</p>

                <div className="container mt-5">
                    <div className="card-group justify-content-center">
                        {currentItems.map((product, index) => (
                            <div className="col-sm-3 mb-3 mx-2" key={index}>
                                <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="card-header text-center">
                                        <strong>{product.name}</strong>
                                    </div>
                                    <div className="card-body d-flex flex-column text-center">
                                        <img src={product.img} className="img-fluid" style={{ height: '150px', objectFit: 'contain' }} alt={product.name} />
                                        <p className="card-text mt-3">{product.features}</p>
                                        <p><strong>Valor:</strong> {product.price} pontos</p>
                                        <p><strong>Ano:</strong> {product.year}</p>
                                        <div className="d-flex justify-content-center mt-2">
                                            {product.colors.map((color, idx) => (
                                                <button key={idx} className="btn btn-circle" style={{ backgroundColor: color, border: '2px solid #cfcfcf', margin: '0 5px', width: '30px', height: '30px', borderRadius: '50%' }}></button>
                                            ))}
                                        </div>
                                        <button type="button" className="btn btn-outline-success mt-3 px-5">
                                            Resgatar por <strong>{product.price} pontos</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Componente de Paginação */}
                    <Pagination className="justify-content-center mt-4">
                        {[...Array(totalPages)].map((_, idx) => (
                            <Pagination.Item key={idx + 1} active={currentPage === idx + 1} onClick={() => handlePageChange(idx + 1)}>
                                {idx + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </section>

            <div className="footer d-flex flex-column flex-md-row align-items-center justify-content-between py-4 px-4 px-xl-5 bg-success">
                <div className="logo">
                    <img src='./image/BannerLogos/imgLogo1.svg' alt='Logo Localiza' />
                </div>
                <div className="text-center text-md-center text-white flex-grow-1">
                    Copyright © 2024. "Esta página é uma aplicação inspirada na Localiza, criada apenas para fins de estudo e aprendizado."
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
