import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container mt-5'>
            {/* Latest courses */}
            <h3 className='pb-4 mb-2'>Latest Courses <a href="/" className='float-end'>See All</a> </h3>
            <div className='row'>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End latest courses */}

            {/* Popular courses */}
            <h3 className='pb-4 mb-2 mt-5'>Popular Courses <a href="/" className='float-end'>See All</a> </h3>
            <div className='row'>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End popular courses */}

            {/* Popular teachers */}
            <h3 className='pb-4 mb-2 mt-5'>Popular Teachers <a href="/" className='float-end'>See All</a> </h3>
            <div className='row'>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Teacher Name</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Teacher Name</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Teacher Name</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <a href="/">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="/">Teacher Name</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End popular teachers */}

            {/* Student testimonials */}
            <h3 className='pb-4 mb-2 mt-5'>Student Testimonials</h3>
            <div id="carouselExampleIndicators" class="carousel slide bg-dark text-white py-5" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* End student testimonials */}
        </div>
    )
}

export default Home