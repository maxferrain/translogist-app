import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ContactUs from './components/ContactUs/ContactUs'
import WhyUs from './components/WhyUs/WhyUs'
import {FloatButton} from 'antd'
import Footer from './components/Footer/Footer'
import Reviews from './components/Reviews/Reviews'
import Questions from './components/Questions/Questions'
import Containers from './components/Containers/Containers'
import Services from './components/Services/Services'
import Features from './components/Features/Features'


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <WhyUs/>
            <Features/>
            <Services/>
            <Containers/>
            <Questions/>
            <Reviews/>
            <ContactUs/>
            <FloatButton.BackTop/>

            <Footer/>
        </>)
}

export default App
