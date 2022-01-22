import { Letter } from "./letterForm.js"
import { Submissions } from "./submission.js"



export const PenPal = () => {
    return `
        <h1>Pen Pal Society</h1>
         <section class="messageForm">
            ${Letter()}
        </section>

        <section class="submit">
        <h2 id="move">Submission</h2>
            ${Submissions()}
        </section>
    `
}

