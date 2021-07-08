const INITIAL_STATE = {
    question: [{
            "id": 0,
            "question": "What is the full form of HTML",
            "answer": "Hyper Text Markup Language",
            "options": [
                "Hyper Test Make up Language",
                "Hyper Text Markup Language",
                "Hyper Text Made up Language",
               
            ]
        },
        {
            "id": 1,
            "question": "What is the full form of RAM ?",
            "answer": "Random Access Memory",
            "options": [
                "Random Access Memory",
                "Randomely Access Memory",
                "Run Aceapt Memory",
                
            ]
        },
        {
            "id": 2,
            "question": "What is the full form of CPU?",
            "answer": "Central Processing Unit",
            "options": [
                "Central Program Unit",
                "Central Processing Unit",
                "Central Preload Unit",
                
            ]
        },
        
    ]
}

const reducer = (state = INITIAL_STATE) => {
    return state;
}

export default reducer;