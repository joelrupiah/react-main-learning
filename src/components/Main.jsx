import React from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from '../inc/Footer'
import Header from '../inc/Header'
import About from './About';
import CourseDetail from './CourseDetail';
import Home from './Home'

import TeacherDetail from './TeacherDetail'

// user routes
import MyCourses from './User/MyCourses'
import FavouriteCourses from './User/FavouriteCourses'
import RecommendedCourses from './User/RecommendedCourses'
import ProfileSetting from './User/ProfileSetting'
import ChangePassword from './User/ChangePassword'
import Dashboard from './User/Dashboard'
import Login from './User/Login'
import Register from './User/Register'
// end user routes

// teacher routes
import TeacherLogin from './Teacher/TeacherLogin'
import TeacherRegister from './Teacher/TeacherRegister'
import TeacherDashboard from './Teacher/TeacherDashboard'
import TeacherCourses from './Teacher/TeacherCourses'
import TeacherAddCourse from './Teacher/TeacherAddCourse'
import TeacherStudentUsers from './Teacher/TeacherStudentUsers'
import TeacherProfileSettings from './Teacher/TeacherProfileSettings'
import TeacherPasswordChange from './Teacher/TeacherPasswordChange'
// end teacher routes

const Main = () => {
  return (
    <div className='App'>
        <Header />
        <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/user-dashboard' element={<Dashboard />} />
            <Route path='/about' element={<About />} />

            <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}></Route>

            {/* user routes */}
            <Route path='/my-courses' element={<MyCourses />} />
            <Route path='/favourite-courses' element={<FavouriteCourses />} />
            <Route path='/recommended-courses' element={<RecommendedCourses />} />
            <Route path='/profile-settings' element={<ProfileSetting />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/detail/:course_id' element={<CourseDetail />} />
            <Route path='/user-login' element={<Login />} />
            <Route path='/user-register' element={<Register />} />
            {/* end user routes */}

            {/* teacher routes */}
            <Route path='/teacher-login' element={<TeacherLogin />}></Route>
            <Route path='/teacher-register' element={<TeacherRegister />}></Route>
            <Route path='/teacher-dashboard' element={<TeacherDashboard />}></Route>
            <Route path='/my-teacher-courses' element={<TeacherCourses />}></Route>
            <Route path='/add-teacher-course' element={<TeacherAddCourse />}></Route>
            <Route path='/my-student-users' element={<TeacherStudentUsers />}></Route>
            <Route path='/teacher-profile-settings' element={<TeacherProfileSettings />}></Route>
            <Route path='/teacher-change-password' element={<TeacherPasswordChange />}></Route>
            {/* end teacher routes */}
            
        </Routes>
        <Footer />
    </div>
  )
}

export default Main