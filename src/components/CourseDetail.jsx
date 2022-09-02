import React from 'react'
// import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // let { course_id } = useParams()

    return (
        // <div>CourseDetail { course_id }</div>
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/image-one.jpg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course title</h3>
                    <p>Course description</p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail