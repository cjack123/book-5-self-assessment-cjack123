import { PenPal  } from "./PenPal.js"






const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



const render = () => {
            mainContainer.innerHTML = PenPal()

}

render()