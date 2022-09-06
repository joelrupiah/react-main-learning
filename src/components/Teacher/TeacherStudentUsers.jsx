import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

const TeacherStudentUsers = () => {
    
    useEffect(() => {
        document.title = 'Teacher Students Users'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">My Students</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Enrolled Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td><Link to="/">Joel Rupiah</Link></td>
                                    <td><Link to="/">Python</Link></td>
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

export default TeacherStudentUsers