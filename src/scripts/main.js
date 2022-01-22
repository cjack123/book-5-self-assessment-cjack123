import { PenPal } from "./PenPal.js"
import { fetchPals, fetchTopics, fetchBros, fetchSubmissions } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")
const render = () => {
fetchPals().then(() =>{
    fetchBros().then(() => {
        fetchTopics().then(() => {
        fetchSubmissions().then(() => {
        mainContainer.innerHTML = PenPal()
       
            
        })
    })
        
    })

})}

render()