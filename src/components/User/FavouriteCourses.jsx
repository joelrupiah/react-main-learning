import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const FavouriteCourses = () => {
    
    useEffect(() => {
        document.title = 'User Favourite Courses'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">Favourite Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>PHP Development</td>
                                    <td><Link to="/">Joel Jeremiah Rupiah</Link></td>
                                    <td>
                                        <button type='submit' className="btn btn-danger btn-sm active">Delete</button>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default FavouriteCourses