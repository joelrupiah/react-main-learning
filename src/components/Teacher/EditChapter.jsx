import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

const baseUrl = "http://127.0.0.1:8000/api"
const EditChapter = () => {

    const { chapter_id } = useParams()

    const [chapterData, setChapterData] = useState({
        course: '',
        title: '',
        description: '',
        // video: '',
        previous_video: '',
        remarks: ''
    })

    const handleChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.value
        })
    }

    const handleFileChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.files[0]
        })
    }

    const createChapter = () => {
        const _formData = new FormData()

        _formData.append('course', chapterData.course)
        _formData.append('title', chapterData.title)
        _formData.append('description', chapterData.description)
        _formData.append('video', chapterData.video, chapterData.video.name)
        _formData.append('remarks', chapterData.remarks)

        try {
            axios.post(baseUrl + '/chapter/' + chapter_id, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((response) => {
                console.log(response.data)
                // window.location.href = '/add-chapter/5'
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // document.title = 'Teacher Add Chapter'
        try {
            axios.get(baseUrl + '/chapter/' + chapter_id).then((response) => {
                // console.log(response.data)
                setChapterData(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <div className="col-md-9">
                    <div className="card text-start">
                        <h5 className="card-header">Edit Chapter</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input value={chapterData.title} name='title' onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea value={chapterData.description} name='description' onChange={handleChange} className="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Video</label>
                                <div className="col-sm-10">
                                    <input name='video' onChange={handleFileChange} type="file" className="form-control" />
                                    <video controls width="100%" height="150">

                                        <source src={chapterData.video}
                                            type="video/webm" />

                                        <source src={chapterData.video}
                                            type="video/mp4" />

                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Remarks</label>
                                <div className="col-sm-10">
                                    <textarea value={chapterData.remarks} name='remarks' onChange={handleChange} className="form-control" placeholder='This video is on authentication' rows="3"></textarea>
                                </div>
                            </div>
                            <hr />
                            <button onClick={createChapter} type='button' className="btn btn-primary">Add Chapter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditChapter