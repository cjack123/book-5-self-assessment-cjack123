// info user clicked on
import { getPals, getBros, getTopics, getSubmissions } from "./dataAccess.js"



export const convertSubmissionToListElement = (submission) => {
    const pals = getPals()
    const bros = getBros()
    const topics = getTopics()

    const author = pals.find(
        (pal) => {
            return pal.id === submission.authorId
        }
    )

    const recipient = bros.find(
        (bro) => {
            return bro.id === submission.recipientId
        }
    )

    const subject = topics.find(
        (topic) => {
            return topic.id === submission.topicId
        }
    )

    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();


    return `
    <section id="help" class="all">
        <section class="message"> 
            <div class="header">
                <p>Dear ${recipient.name} (${recipient.email}), </p>
                </div>
            <div class="body">
                <p>${submission.message}</p>
                </div>   
            <div class="closing">
                <p>Sincerly,</p> 
                <p>${author.name} (${author.email})</p>
                </div>
            <div id=date>
                <p id="date">Sent on ${date}</p>
                </div>
            <div class="subject">
            <h6 class="flex">${subject.name}</h6>
                </div> 
        </section>
    </section>

`
}


export const Submissions = () => {
    const submissions = getSubmissions()

    let html = "<ul>"

    const listItems = submissions.map(convertSubmissionToListElement)
    html += listItems.join("")

    html += "</ul>"



    return html
}
