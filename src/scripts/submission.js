// info user clicked on
import { getPals, getBros, getTopics, getSubmissions } from "./dataAccess.js"


const pals = getPals()
const bros = getBros()
const topics = getTopics()

const convertSubmissionToListElement = (message) => {
    const selectAuthor = pals.find(
        (pal) => {
            return pal.id === message.palId
        }
    )

    const authorEmail = pals.find(
        (email) => {
            return email.id === message.emailId
        }
    )

    const selectTopic = topics.find(
        (topic) => {
            return topic.id === message.topicId
        }
    )

    const selectRecipient = bros.find(
        (bro) => {
            return bro.id === message.broId
        }
    )

    const recipientEmail = bros.find(
        (bro) => {
            return bro.id === message.broId
        }
    )

    return `
    <li>
    ${
        selectAuthor.map(
            author => {
                return `<p value="${author.id}">${author.name}</option>`
            }
        ).join("")
    }
    </li>
    
`
}



export const Submissions = () => {
    const submission = getSubmissions()

    let html = "<ul>"

    const note = submission.map(convertSubmissionToListElement)

    html += note.join("")
    html += "<ul>"


    return html
}





//what do i want to do?
//i want to send my infomation to my api
//i want to render my submissions on the hmtl
//then css i guess

//how do i do it?
//i will need to use the post method 
//i need functions on the submission page (and maybe other pages)
//i need event listener to listen for the clicks on the page (where? idk)

//where should i start?
//on the submissions page. it may be easier to work on the front end 
//then send the correct information then having to clear up then database with errors

//








//what is parseint?
//how would i variable scope global? is global across files within the file?
//what is --?

