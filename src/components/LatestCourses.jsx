import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LatestCourses = () => {
    
    useEffect(() => {
        document.title = 'Latest Courses'
    })

    return (
        <div className='container mt-5'>
            {/* Latest courses */}
            <h3 className='pb-4 mb-2'>Latest Courses
            </h3>
            <div className='row'>
                <div className="col-md-3 mb-3">
                    <div className="card text-start" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 2000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-start" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 2000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-start" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 2000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card text-start" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 2000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End latest courses */}

            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item"><a className="page-link" href="/">Next</a></li>
                </ul>
            </nav>
            {/* pagination end */}
        </div>
    )
}

export default LatestCourses