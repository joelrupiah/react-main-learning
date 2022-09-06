import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
    
    useEffect(() => {
        document.title = 'User Dashboard'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <div className="col-md-9">
                    Dashboard
                </div>
            </div>
        </div>
    )
}

export default Dashboard