import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { PartyClown } from "./PartyClown"

// pushing HTML to the index.html page to the section with the container ID
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns()) // row9
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = PartyClown()
        }
    )
}

render()


// Now your main module has to listen for the custom event and invoke the render() function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)