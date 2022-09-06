import React, { useEffect } from 'react'
import TeacherSidebar from './TeacherSidebar'

const TeacherAddCourse = () => {

    useEffect(() => {
        document.title = 'Teacher Add Course'
    })

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
                                <label className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                <textarea className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Course Video</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Technologies</label>
                                <div className="col-sm-10">
                                <textarea className="form-control" rows="3"></textarea>
                                    PHP, Python, Javascript, e.t.c.
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TeacherAddCourse