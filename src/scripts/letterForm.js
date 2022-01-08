import { getPals } from "./dataAccess.js"
import { getTopics } from "./dataAccess.js"





export const Letter= () => {
    const pals = getPals()
    const topics = getTopics()
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
                <textarea id="" name="faveNote" rows="4" cols="50" placeholder="Enter Message Here!"></textarea>
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
                            pals.map(
                                pal => {
                                    return `<option name="faveReader" value="${pal.id}">${pal.name}</option>`
                                }
                            ).join("")
                        }
                </select><br><br>
            </div>
        <button class="button" id="submitRequest">Submit Request</button>
    ` 

    return html
}
