// importing functions from other modules
import { Requests } from "./Requests.js"
import { PartyForm } from "./partyForm.js"

// exporting html to include the PartyForm and Requests list
export const PartyClown = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
    `
}


