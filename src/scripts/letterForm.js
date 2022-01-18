import { getPals, getBros, getTopics, sendSubmissions } from "./dataAccess.js"






export const Letter= () => {
    const pals = getPals()
    const topics = getTopics()
    const bros = getBros()
    let html = `
        <div class="fields">
            <div class="field">
                <h2>Author</h2>
                <select class="authors" id="author">
                    <option value="">
                        Choose
                    </option>
                        ${
                            pals.map(
                                pal => {
                                    return `<option name="faveWriter" value="${pal.id}">${pal.name}</option>`
                                }
                            ).join("")
                        }
                </select>
            </div>




            <div class="field">
            <h2>Message</h2>
                <textarea id="" name="faveNote" rows="4" cols="50"
                 placeholder="Enter Message Here!" maxlength="200" size="200"></textarea>
            </div>


            <div class="field">
            <h2>Topics</h2>
                ${
                    topics.map(
                        topic => {
                            return `<input name="faveTopic" value=${topic.id} type="radio">
                            <label>${topic.name}</label>
                        `
                        }
                    ).join("")
                }
            </div>



            <div class="field">
            <h2>Recipient</h2>
                <select class="recipients" id="recipient">
                    <option value="">
                        Choose
                    </option>
                        ${
                            bros.map(
                                bro => {
                                    return `<option name="faveReader" value="${bro.id}">${bro.name}</option>`
                                }
                            ).join("")
                        }
                </select><br><br>
            </div>
        <button class="button" id="submitSubmission">Submit Letter</button>

    ` 

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitSubmission") {
        // Get what the user typed into the form fields
        const userWriter = document.querySelector("select[id='author']").value
        const userNote = document.querySelector("textarea[name='faveNote']").value
        const userTopic = document.querySelector("input[name='faveTopic']:checked").value
        const userReader = document.querySelector("select[id='recipient']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: +userWriter,
            topicId: +userTopic,
            message: userNote,
            recipientId: +userReader 
        }

        // Send the data to the API for permanent storage
        sendSubmissions(dataToSendToAPI)
    }
})





