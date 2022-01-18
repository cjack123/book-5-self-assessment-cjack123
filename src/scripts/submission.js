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
<section class="all">
<section class="message">
    <div class="date">
        <p>${date}</p>
    </div>    
    <div class="header">
        <p>From: ${author.name} (${author.email})</p> 
        <p>To: ${recipient.name} (${recipient.email})</p>
    </div>
    <div class="subject">
        <p>${subject.name}</p>
    </div>
    <br><br>
    <div class="body">
        <p>${submission.message}</p>
    </div>
</section>
</section>
<br><br>
`
// console.log(author.email) 
// console.log(subject)   
// return html


}



{/* <p>Dear ${foundAuthor.name} (${foundAuthor.email}),</p> */}

export const Submissions = () => {
    const submissions = getSubmissions()

    let html = "<ul>"

    const listItems = submissions.map(convertSubmissionToListElement)
    html += listItems.join("")

    html += "</ul>"



    return html
}




//             pals.find(
//                 pal => { 
//                     return `<p value=${pals.id}>${pals.name}</pal>`
                    
                    
//                 }
//             )
//         }
//     </section>
   
// `

// return html










// what is parseint?
// how would i variable scope global? is global across files within the file?
// what is --?

    // const authorEmail = pals.find(
    //     (email) => {
    //         return email.id === message.emailId
    //     }
    // )

    // const selectTopic = topics.find(
    //     (topic) => {
    //         return topic.id === message.topicId
    //     }
    // )

    // const selectRecipient = bros.find(
    //     (bro) => {
    //         return bro.id === message.broId
    //     }
    // )

    // const recipientEmail = bros.find(
    //     (bro) => {
    //         return bro.id === message.broId
    //     }
    // )


    // return `
    // <li>
    // ${
    //     selectAuthor.map(
    //         author => {
    //             return `<p value="${author.id}">${author.name}</option>`
    //         }
    //     ).join("")
    // }
    // </li> `