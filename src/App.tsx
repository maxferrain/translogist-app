import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import ContactUs from './pages/ContactUs/ContactUs'
import WhyUs from './pages/WhyUs/WhyUs'
import { FloatButton } from 'antd'
import Footer from './components/Footer/Footer'
import Reviews from './components/Reviews/Reviews'


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <WhyUs/>
            <Reviews/>
            <ContactUs/>
            <FloatButton.BackTop />

            <Footer/>
        </>)
}

export default App
