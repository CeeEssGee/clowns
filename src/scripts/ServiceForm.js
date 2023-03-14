import { sendRequest } from "./dataAccess.js"

// exports a function that creates the HTML input fields to allow us to collect information from customers
export const ServiceForm = () => {
    let html = `
        <div class="field">
        <label class="label" for="parentName">Parent's Name</label>
        <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendees">Number of Children Attending the Party</label>
            <input type="text" name="attendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Party Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date of the Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="duration">Duration in Hours</label>
            <input type="number" name="duration" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

// Add the following event listener to the ServiceForm module. Read each line of code, discuss with your teammates, and see if you can understand what everything is doing. Make sure you write down any questions you have about the code for the review with the instruction team.

// assigning the mainContainer variable to the document.querySelector("#container")
// returns the first element within the document that matches the id of container
const mainContainer = document.querySelector("#container")

// within the element with the id of container, we are looking for a click event for the target id of submitRequest, which is our Submit Request Button - when a user clicks on the Submit Request Button, the next steps will be performed
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendees = document.querySelector("input[name='attendees']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userDuration = document.querySelector("input[name='duration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            attendees: userAttendees,
            address: userAddress,
            partyDate: userDate,
            duration: userDuration
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})
