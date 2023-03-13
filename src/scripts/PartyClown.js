// importing functions from other modules
import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

// exporting html to include the PartyForm and Requests list
export const PartyClown = () => {
    return `
        <h1>Clowning Around Buttons and Lollipop</h1>
        <section class="partyForm">
            ${ServiceForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
    `
}


