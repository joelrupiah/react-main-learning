import React, { useEffect } from 'react'

const TeacherLogin = () => {
    
    useEffect(() => {
        document.title = 'Teacher Login'
    })

  return (
    <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card text-start">
                        <h5 className='card-header'>Teacher Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="form-check-label">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TeacherLogin