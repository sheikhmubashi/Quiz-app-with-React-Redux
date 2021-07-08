import React from 'react'
import AppBar from '../components/AppBar'
import StartQuiz from '../components/StartQuiz'
import Footer from '../components/Footer'

function DashBoard() {
    sessionStorage.clear();
    return (
        <div>
            <AppBar PageTitle="Quiz App"/>
            <StartQuiz/>
            <Footer/>
        </div>
    )
}

export default DashBoard
