const applicationState = {
    submissions: [],
    topics: [
        {
            id: 1,
            name: "business"
        },
        {
            id: 2,
            name: "friendly"
        },
        {
            id: 3,
            name: "family"
        },
        {
            id: 4,
            name: "congragulations"
        },
        {
            id: 4,
            name: "condolences"
        }
    ],
    pals: [{
        id: 1,
        name: "Tomi Adeyemi"
      },
     {
        id: 2,
        name: "George R. R. Martin"
      },
      {
        id: 3,
        name: "Emily Dickinson"
      },
      {
        id: 4,
        name: "Laureate Amanda Gorman"
      }
    ]
}


const API = "http://localhost:8088"


export const fetchSubmissions = () => {
    return fetch(`${API}/submissions`)
        .then(response => response.json())
        .then(
            (writtenSubmissions) => {
                // Store the external state in application stateß
                applicationState.requests = writtenSubmissions
            }
        )
}

export const getSubmissions = () => {
    return applicationState.submissions.map(request => ({...request}))
}

export const getPals = () => {
    return applicationState.pals.map(pal => ({...pal}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}