import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseUrl = "http://127.0.0.1:8000/api/teacher/"
const TeacherRegister = () => {

    const [teacherData, setTeacherData] = useState({
        'full_name': '',
        'email': '',
        'qualification': '',
        'password': '',
        'mobile': '',
        'skills': '',
        'status': ''
    })

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        })
    }

    const submitTeacherRegisterData = () => {
        const teacherRegisterData = new FormData()
        teacherRegisterData.append('full_name', teacherData.full_name)
        teacherRegisterData.append('email', teacherData.email)
        teacherRegisterData.append('qualification', teacherData.qualification)
        teacherRegisterData.append('password', teacherData.password)
        teacherRegisterData.append('mobile', teacherData.mobile)
        teacherRegisterData.append('skills', teacherData.skills)

        try {
            axios.post(baseUrl, teacherRegisterData).then((response) => {
                // console.log(response.data)
                setTeacherData({
                    'full_name': '',
                    'email': '',
                    'qualification': '',
                    'password': '',
                    'mobile': '',
                    'skills': '',
                    'status': 'success'
                })
                window.location.href = '/teacher-login'
            })
        } catch (error) {
            // console.log(error)
            setTeacherData({ 'status': 'error' })
        }
    }

    useEffect(() => {
        document.title = 'Teacher Register'
    })

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus === 'true') {
        window.location.href = '/teacher-dashboard'
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    {teacherData.status === 'success' && <p className='text-success'>Registration success</p>}
                    {teacherData.status === 'error' && <p className='text-danger'>Registration failed</p>}
                    <div className="card text-start">
                        <h5 className='card-header'>Teacher Register</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full name</label>
                                    <input value={teacherData.full_name} onChange={handleChange} name='full_name' type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Qualification</label>
                                    <input value={teacherData.qualification} onChange={handleChange} name='qualification' type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input value={teacherData.mobile} onChange={handleChange} name='mobile' type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} onChange={handleChange} name='skills' className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                                <button onClick={submitTeacherRegisterData} type="button" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister