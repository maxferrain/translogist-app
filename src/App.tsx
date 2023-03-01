import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import ContactUs from './pages/ContactUs/ContactUs'
import WhyUs from './pages/WhyUs/WhyUs'
import { FloatButton } from 'antd'
import Footer from './components/Footer/Footer'
import Reviews from './components/Reviews/Reviews'
import Questions from './components/Questions/Questions'
import Containers from './components/Containers/Containers'


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <WhyUs/>
            <Containers/>
            <Questions/>
            <Reviews/>
            <ContactUs/>
            <FloatButton.BackTop />

            <Footer/>
        </>)
}

export default App
