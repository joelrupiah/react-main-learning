import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'

const baseUrl = "http://127.0.0.1:8000/api"
const TeacherAddCourse = () => {

    const [categories, setCategories] = useState([])
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        featured_image: '',
        technologies: ''
    })

    const teacherId = localStorage.getItem('teacherId')

    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        })
    }

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        })
    }

    const createCourse = () => {
        const _formData = new FormData()

        _formData.append('category', courseData.category)
        _formData.append('title', courseData.title)
        _formData.append('teacher', teacherId)
        _formData.append('description', courseData.description)
        _formData.append('featured_image', courseData.featured_image, courseData.featured_image.name)
        _formData.append('technologies', courseData.technologies)

        try {
            axios.post(baseUrl + '/course/', _formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((response) => {
                // console.log(response.data)
                window.location.href='/add-teacher-course'
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // document.title = 'Teacher Add Course',
        try {
            axios.get(baseUrl + '/categories').then((response) => {
                // console.log(response.data)
                setCategories(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    console.log(categories)

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <div className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Categories</label>
                                <div className="col-sm-10">
                                    <select name='category' onChange={handleChange} className='form-control'>
                                        {categories.map((category, index) => {
                                            return <option key={index} value={category.id}>{category.title}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input name='title' onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea name='description' onChange={handleChange} className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Featured Image</label>
                                <div className="col-sm-10">
                                    <input name='featured_image' onChange={handleFileChange} type="file" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Technologies</label>
                                <div className="col-sm-10">
                                    <textarea name='technologies' onChange={handleChange} className="form-control" placeholder='PHP, Python, Javascript, e.t.c.' rows="3"></textarea>
                                </div>
                            </div>
                            <hr />
                            <button onClick={createCourse} type='button' className="btn btn-primary">Create Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherAddCourse