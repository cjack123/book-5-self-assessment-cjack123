import { Letter  } from "./letterForm.js"












export const PenPal = () => {
    return `
        <h1>Pen Pal Society</h1>
            <section class="messageForm">
            ${Letter()}
            </section>

        <section class="mSubmission">
            <h2>Submission</h2>
            
        </section>
    `
}