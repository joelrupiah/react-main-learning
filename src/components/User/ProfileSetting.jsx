import React, { useEffect } from 'react'
import Sidebar from './Sidebar'

const ProfileSetting = () => {
    
    useEffect(() => {
        document.title = 'User Profile Settings'
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <div className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Full Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Profile Photo</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Interests</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting