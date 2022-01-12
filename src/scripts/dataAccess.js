const applicationState = {
    submissions: [],
    topics: [],
    pals: [],
    bros: []
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

export const getBros = () => {
    return applicationState.bros.map(bro => ({...bro}))
}

export const fetchBros = () => {
    return fetch(`${API}/bros`)
        .then(response => response.json())
        .then(
            (serviceBros) => {
                // Store the external state in application stateß
                applicationState.bros = serviceBros
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
    return applicationState.submissions.map(submission => ({...submission}))
}

export const fetchSubmissions = () => {
    return fetch(`${API}/submissions`)
        .then(response => response.json())
        .then(
            (serviceSubmissions) => {
                // Store the external state in application stateß
                applicationState.requests = serviceSubmissions
            }
        )
}

export const sendSubmissions = (userServiceSubmission) => {
    const mainContainer = document.querySelector("#container")
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceSubmission)
    }


    return fetch(`${API}/submissions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}


//Fetch info
//render info in main.js
//call the letterForm use get pals in function

