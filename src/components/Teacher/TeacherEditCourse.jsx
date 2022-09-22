import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import TeacherSidebar from './TeacherSidebar'

const baseUrl = "http://127.0.0.1:8000/api"
const TeacherEditCourse = () => {

    const { course_id } = useParams()

    const [categories, setCategories] = useState([])
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        previous_featured_image: '',
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
            [event.target.name]: event.target.files[0]
        })
    }

    const createCourse = () => {
        const _formData = new FormData()

        _formData.append('category', courseData.category)
        _formData.append('title', courseData.title)
        _formData.append('teacher', teacherId)
        _formData.append('description', courseData.description)
        if (courseData.video !== '') {
            _formData.append('featured_image', courseData.featured_image, courseData.featured_image.name)
        }
        _formData.append('technologies', courseData.technologies)

        try {
            axios.put(baseUrl + '/teacher-courses-detail/' + course_id, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((response) => {
                // console.log(response.data)
                if (response.status == 200) {
                    Swal.fire({
                        toast: true,
                        icon: 'success',
                        title: 'Course updated',
                        animation: false,
                        position: 'top-right',
                        showConfirmButton: false,
                        timer: 3000,
                        // timerProgressBar: true,
                    })
                }
                // window.location.href = '/add-teacher-course'
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.title = 'Teacher Edit Course'

        // Fetch categories
        try {
            axios.get(baseUrl + '/categories').then((response) => {
                // console.log(response.data)
                setCategories(response.data)
            })
        } catch (error) {
            console.log(error)
        }
        // Fetch current course data
        try {
            axios.get(baseUrl + '/teacher-courses-detail/' + course_id).then((response) => {
                console.log(response.data)
                setCourseData({
                    category: response.data.category,
                    title: response.data.title,
                    description: response.data.description,
                    previous_featured_image: response.data.featured_image,
                    technologies: response.data.technologies,
                    featured_image: ''
                })
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
                        <h5 className="card-header">Edit Course</h5>
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
                                    <input value={courseData.title} name='title' onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea value={courseData.description} name='description' onChange={handleChange} className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Featured Image</label>
                                <div className="col-sm-10">
                                    <input name='featured_image' onChange={handleFileChange} type="file" className="form-control" />
                                    {courseData.previous_featured_image &&
                                        <div className='mt-2'>
                                            <img width="300" height="200"
                                                src={courseData.previous_featured_image} 
                                                alt={courseData.title} 
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Technologies</label>
                                <div className="col-sm-10">
                                    <textarea value={courseData.technologies} name='technologies' onChange={handleChange} className="form-control" placeholder='PHP, Python, Javascript, e.t.c.' rows="3"></textarea>
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

export default TeacherEditCourse