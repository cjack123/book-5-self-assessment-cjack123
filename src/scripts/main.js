import { PenPal } from "./PenPal.js"
import { fetchPals, fetchTopics, fetchBros, fetchSubmissions } from "./dataAccess.js"


// fetchSumbissions

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



const render = () => {
    fetchPals().then(fetchBros().then(fetchTopics().then(fetchSubmissions().then(
        () => {
            mainContainer.innerHTML = PenPal()  
        }
    ))))

}
    

render()


//add fetchletter



// fetchPals().then(
//     () => {
//         mainContainer.innerHTML = PenPal()
//     }
// )
// fetchTopics().then(
//     () => {
//         mainContainer.innerHTML = PenPal()
//     }
// )
// fetchBros().then(
//     () => {
//         mainContainer.innerHTML = PenPal()
//     }
//