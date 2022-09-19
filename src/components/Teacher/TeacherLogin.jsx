import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseUrl = "http://127.0.0.1:8000/api"
const TeacherLogin = () => {

    const [teacherLoginData, setTeacherLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => (
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        })
    )

    const submitLogin = () => {
        // console.log(teacherLoginData)
        const teacherFormData = new FormData()
        teacherFormData.append('email', teacherLoginData.email)
        teacherFormData.append('password', teacherLoginData.password)

        try {
            axios.post(baseUrl + '/teacher-login', teacherFormData).then((response) => {
                // console.log(response.data)
                if (response.data.bool === true) {
                    localStorage.setItem('teacherLoginStatus', true)
                    window.location.href = '/teacher-dashboard'
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus === 'true') {
        window.location.href = '/teacher-dashboard'
    }

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
                                    <input name='email' value={teacherLoginData.email} onChange={handleChange} type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input name='password' value={teacherLoginData.password} onChange={handleChange} type="password" className="form-control" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Remember me</label>
                                </div>
                                <button onClick={submitLogin} type="button" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin