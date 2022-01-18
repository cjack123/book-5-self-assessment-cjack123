import { Letter } from "./letterForm.js"
import { Submissions } from "./submission.js"
import { getSubmissions } from "./dataAccess.js"


// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target
//         if(itemClicked.id.startsWith("submission")) {
//             return getSubmissions()
//         }

//     }
// )


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


