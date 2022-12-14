import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    // if (teacherLoginStatus == 'true') {
    //     window.location.href = '/teacher-dashboard'
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Django React Learning System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Teacher
                            </a>
                            <ul className="dropdown-menu">
                                {teacherLoginStatus !== 'true' &&
                                    <>
                                        <Link className="dropdown-item" to="/teacher-register">Register</Link>
                                        <Link className="dropdown-item" to="/teacher-login">Login</Link>
                                    </>
                                }

                                <li><hr className="dropdown-divider" /></li>
                                {teacherLoginStatus === 'true' &&
                                    <Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link>
                                }
                                <li><Link className="dropdown-item text-danger" to="/teacher-logout">Logout</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to="/user-register">Register</Link>
                                <Link className="dropdown-item" to="/user-login">Login</Link>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <Link className="dropdown-item" to="/user-dashboard">Dashboard</Link>
                                </li>
                                <li><Link className="dropdown-item text-danger" to="/user-login">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header