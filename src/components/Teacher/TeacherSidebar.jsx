import React from 'react'
import { Link } from 'react-router-dom'

const TeacherSidebar = () => {
    return (
        <div className="card text-start">
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to="/my-teacher-courses" className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to="/my-student-users" className='list-group-item list-group-item-action'>My Users</Link>
                <Link to="/add-teacher-course" className='list-group-item list-group-item-action'>Add Course</Link>
                <Link to="/teacher-profile-settings" className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to="/teacher-change-password" className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to="/teacher-login" className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
    )
}

export default TeacherSidebar