import React from 'react'
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // let { course_id } = useParams()

    return (
        // <div>CourseDetail { course_id }</div>
        <div className="container mt-3">
            <div className="row text-start">
                <div className="col-4">
                    <img src="/image-one.jpg" className="img-thumbnail" alt="Course" />
                </div>
                <div className="col-8">
                    <h3>Course title</h3>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English.
                    </p>
                    <p className='fw-bold'>Course By:  <Link to="/teacher-detail/2">Teacher One</Link></p>
                    <p className='fw-bold'>Duration:  3 Hours 30 Minutes</p>
                    <p className='fw-bold'>Enrolled Students:  400 Students</p>
                    <p className='fw-bold'>Rating:
                        4/5
                    </p>
                </div>
            </div>

            {/* Course Videos */}

            <div className="card text-start mt-4">
                <h3 className="card-header">
                    Course Videos
                </h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                    <li class="list-group-item">Introductions
                        <span className='float-end'>
                            <span className='me-5'> 1 hour 30 mins</span>
                            <button className="btn btn-sm btn-success">
                                <i class="bi bi-play-btn"></i>
                            </button>
                        </span>
                    </li>
                </ul>
            </div>

            {/* End Course Videos */}

            <h3 className='pb-4 mb-2 mt-5'>Related Courses</h3>
            <div className='row'>
                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/detail/1">
                            <img src="/image-one.jpg" className="card-img-top" alt="..." />
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
                            <img src="/image-one.jpg" className="card-img-top" alt="..." />
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
                            <img src="/image-one.jpg" className="card-img-top" alt="..." />
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
                            <img src="/image-one.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseDetail