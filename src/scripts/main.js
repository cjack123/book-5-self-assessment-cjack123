import { PenPal  } from "./PenPal.js"
import { fetchPals  } from "./dataAccess.js"
import { fetchTopics  } from "./dataAccess.js"




const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



const render = () => {
    fetchPals().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )

    fetchTopics().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

render()


//add fetchletter