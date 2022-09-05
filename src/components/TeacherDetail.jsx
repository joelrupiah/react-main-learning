import React from 'react'
import { Link } from 'react-router-dom'

const TeacherDetail = () => {
  return (
    <div className="container mt-3">
            <div className="row text-start">
                <div className="col-4">
                    <img src="/image-one.jpg" className="img-thumbnail" alt="Teacher" />
                </div>
                <div className="col-8">
                    <h3>Joel Rupiah</h3>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English.
                    </p>
                    <p className='fw-bold'>Skills:     
                        <Link to="/teacher-detail/2">   PHP</Link>, 
                        <Link to="/teacher-detail/2">   Python</Link>,
                        <Link to="/teacher-detail/2">   Javascript</Link>
                    </p>
                    <p className='fw-bold'>Recent Course:  <Link to="/teacher-detail/2">  ReactJs Course</Link></p>
                    <p className='fw-bold'>Enrolled Students:  400 Students</p>
                    <p className='fw-bold'>Rating:
                        4/5
                    </p>
                </div>
            </div>

            {/* Teacher Videos */}

            <div className="card text-start mt-4">
                <h3 className="card-header">
                    Course List
                </h3>
                <div class="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course One</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course Two</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course Two</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course Two</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScript Course Two</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScript Course Two</Link>
                </div>
            </div>

            {/* End Teacher Videos */}

        </div>
  )
}

export default TeacherDetail