import axios from 'axios'
import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

const baseUrl = "http://127.0.0.1:8000/api"
const AllChapters = () => {

    const [chapterData, setChapterData] = useState([])
    const [totalResult, setTotalResult] = useState(0)

    const { course_id } = useParams()

    // console.log(courseId)

    const Swal = require('sweetalert2')
    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Confirm',
            text: 'Are you sure you want to delete',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Continue'
            
        })
    }

    useEffect(() => {
        // document.title = 'course Courses'
        try {
            axios.get(baseUrl + '/course-chapters/' + course_id).then((response) => {
                console.log(response.data)
                setChapterData(response.data)
                setTotalResult(response.data.length)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">All Chapters ({totalResult})</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Chapter Title</th>
                                        <th>Chapter Video</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chapterData.map((chapter, index) =>
                                        <tr key={index}>
                                            <td><Link to={`/edit-chapter/` + chapter.id}>{chapter.title}</Link></td>
                                            {/* <td><img src={chapter.video} width='80' className='rounded' alt={chapter.title} /></td> */}
                                            <td>
                                                <video controls width="250" height="150">

                                                    <source src={chapter.video}
                                                        type="video/webm" />

                                                    <source src={chapter.video}
                                                        type="video/mp4" />

                                                    Sorry, your browser doesn't support embedded videos.
                                                </video>
                                            </td>
                                            <td><Link to="/">111</Link></td>
                                            <td>
                                                <Link className='btn btn-info btn-sm text-white' to={`/edit-chapter/` + chapter.id}>
                                                    Edit</Link>
                                                <button className='btn btn-danger btn-sm ms-2 text-white' onClick={handleDeleteClick}>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default AllChapters