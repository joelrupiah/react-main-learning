import React, { useEffect } from 'react'
import TeacherSidebar from './TeacherSidebar'

const TeacherDashboard = () => {
    
    useEffect(() => {
        document.title = 'Teacher Dashboard'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <div className="col-md-9">
                    Teacher Dashboard
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard