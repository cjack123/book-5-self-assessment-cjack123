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
                                return `<option value="${pal.id}">${pal.name}</option>`
                            }
                        ).join("")
                    }
            </select>
        </div>




            <div class="field">
            <h2>Letter</h2>
                <textarea id="" name="letterss" rows="4" cols="50"></textarea>
            </div>




            <div class="field">
            <h2>Topics</h2>
                <label htmlFor={topic.id}>{topic.content}</label>
                <input name="cat" key={topic.id} id={item.id} type="radio" />
            </div>




        <div class="field">
            <h2>Recipient</h2>
            <select class="authors" id="author">
                <option value="">
                    Choose
                </option>
                    ${
                        pals.map(
                            pal => {
                                return `<option value="${pal.id}">${pal.name}</option>`
                            }
                        ).join("")
                    }
            </select>
            
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    ` 

    return html
}


{/* <select>
    <option value="Monáe">Janelle Monáe</option>
    <option value="Thompson">Tessa Thompson</option>
    <option value="Ocean">Frank Ocean</option>
    <option value="Lonsdale">Keiynan Lonsdale</option>
</select> */}

{/* <div class="field">
            <h2>Topics</h2>
                <input type="radio" name="serviceBudget" class="input" />
                <label class="label" for="letterTopic">Business</label>
                <input type="radio" name="serviceBudget" class="input" />
                <label class="label" for="letterTopic">Friendly</label>
                <input type="radio" name="serviceBudget" class="input" />
                <label class="label" for="letterTopic">Family</label>
                <input type="radio" name="serviceBudget" class="input" />
                <label class="label" for="letterTopic">Congragulations</label>
                <input type="radio" name="serviceBudget" class="input" />
                <label class="label" for="letterTopic">Condolences</label>
            </div> */}