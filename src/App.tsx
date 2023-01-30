import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import {Space} from 'antd'


function App() {
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Header/>
                <Main/>
            </Space>
        </>)
}

export default App
