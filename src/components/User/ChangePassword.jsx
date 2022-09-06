import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const ChangePassword = () => {
    
    useEffect(() => {
        document.title = 'User Change Password'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <div className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-primary">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword