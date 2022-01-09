const applicationState = {
    submissions: [],
    topics: [],
    pals: []
}


const API = "http://localhost:8088"


export const getPals = () => {
    return applicationState.pals.map(pal => ({...pal}))
}

export const fetchPals = () => {
    return fetch(`${API}/pals`)
        .then(response => response.json())
        .then(
            (servicePals) => {
                // Store the external state in application stateß
                applicationState.pals = servicePals
            }
        )
}


export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (serviceTopics) => {
                // Store the external state in application stateß
                applicationState.topics = serviceTopics
            }
        )
}


export const getSubmissions = () => {
    return applicationState.submissions.map(request => ({...request}))
}


//Fetch info
//render info in main.js
//call the letterForm use get pals in function

