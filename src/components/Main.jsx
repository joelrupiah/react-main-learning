import React from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from '../inc/Footer'
import Header from '../inc/Header'
import About from './About';
import CourseDetail from './CourseDetail';
import Home from './Home'

const Main = () => {
  return (
    <div className='App'>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:course_id' element={<CourseDetail />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Main