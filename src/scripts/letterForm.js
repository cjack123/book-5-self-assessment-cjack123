import { getPals, getBros, getTopics, sendSubmissions } from "./dataAccess.js"



export const Letter= () => {
    const pals = getPals()
    const topics = getTopics()
    const bros = getBros()
    let html = `
        <div class="fields">
            <section id="heads">
                <div class="field">
                <h3>Author</h3>
                    <select id="author">
                    <option value="">Choose</option>
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
                <h3>Recipient</h3>
                    <select id="recipient">
                    <option value="">Choose</option>
                        ${
                            bros.map(
                                bro => {
                                    return `<option name="faveReader" value="${bro.id}">${bro.name}</option>`
                                }
                            ).join("")
                        }
                    </select>
                </div>
            </section>
            <section id="middle">
                <div class="field">
                <h3 id="cent">Topics</h3>
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
            </section>
            <div class="field">
            <h3>Message</h3>
                <textarea name="faveNote" rows="10" cols="130"
                placeholder="Enter Message Here!" maxlength="500" size="220"></textarea>
            </div><br><br>
            <div id="hi">
                <button class="button-56" id="submitSubmission">Submit Letter</button>
            </div>
        </div>

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





