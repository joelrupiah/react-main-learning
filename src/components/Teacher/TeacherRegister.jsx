import React from 'react'

const TeacherRegister = () => {
  return (
    <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card text-start">
                        <h5 className='card-header'>Teacher Register</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Skills</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TeacherRegister