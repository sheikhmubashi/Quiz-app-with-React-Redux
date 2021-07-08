import React from 'react'
import AppBar from '../components/AppBar'
import {Link} from 'react-router-dom'

function Results() {
    let TotalScore = (sessionStorage.getItem("NoOfQuestions") * 10);
    let EarnedScore = sessionStorage.getItem("QuizScore");
    return (
        <div className="Results">
            <AppBar PageTitle="RESULT"/>
            <div id="content">
                <h2><em>Your Score is {EarnedScore} out of {TotalScore}</em></h2>
                <br/>
                <Link to="/">Retake Again ?</Link>
            </div>
        </div>
    )
}

export default Results
