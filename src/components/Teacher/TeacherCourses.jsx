import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

const baseUrl = "http://127.0.0.1:8000/api"
const TeacherCourses = () => {

    const [courseData, setCourseData] = useState([])

    const teacherId = localStorage.getItem('teacherId')
    // console.log(teacherId)

    useEffect(() => {
        // document.title = 'Teacher Courses'
        try {
            axios.get(baseUrl + '/teacher-courses/' + teacherId).then((response) => {
                setCourseData(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    // console.log(courseData)

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Course Image</th>
                                        <th>Total Enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) =>
                                        <tr key={index}>
                                            <td><Link to={`/all-chapters/` + course.id}>{course.title}</Link></td>
                                            <td><img src={course.featured_image} width='80' className='rounded' alt={course.title} /></td>
                                            <td><Link to="/">111</Link></td>
                                            <td>
                                                <Link className='btn btn-success btn-sm active' to={`/add-chapter/` + course.id}>Add Chapters</Link>
                                                <button type='submit' className="btn btn-danger btn-sm ms-2">Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default TeacherCourses