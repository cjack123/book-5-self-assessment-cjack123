import { getPals } from "./dataAccess.js"
import { getBros } from "./dataAccess.js"
import { getTopics } from "./dataAccess.js"





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
            <h2>Letter</h2>
                <textarea id="" name="faveNote" rows="4" cols="50"
                 placeholder="Enter Message Here!" maxlength="200" size="200"></textarea>
            </div>


            <div class="field">
            <h2>Topics</h2>
                ${
                    topics.map(
                        topic => {
                            return `<input name="faveTopic" key=${topic.id} type="radio">
                            <label>${topic.name}</label>
                        </input>`
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
        <button class="button" id="submitLetter">Submit Letter</button>

    ` 

    return html
}

// const mainContainer = document.querySelector("#container")

//     mainContainer.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "submitSubmission") {
//             // Get what the user typed into the form fields
//             const userWriter = document.querySelector("option[name='faveWriter']").value
//             const userNote = document.querySelector("input[name='faveNote']").value
//             const userTopic = document.querySelector("input[name='faveTopic']").value
//             const userReader = document.querySelector("input[name='faveReader']").value

//             // Make an object out of the user input
//             const dataToSendToAPI = {
//                 description: userWriter,
//                 address: userNote,
//                 budget: userTopic,
//                 neededBy: userReader 
//             }

//             // Send the data to the API for permanent storage
//             sendRequest(dataToSendToAPI)
//         }
//     })


