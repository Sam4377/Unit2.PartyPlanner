let events = []
const eventList = document.querySelector(".list")

function render() {
    const html = events.map((event) => {
        return `
            <h4>${event.name}</h4>
            <p> Description: ${event.description}</p>
            <P> Date & Time: ${event.date}</p>
            <p>Location: ${event.location}</p>

        `
    })
    eventList.innerHTML = html.join(``)
}

async function fetchEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    const data = await response.json()
    events = data.data
    console.log(events)
    render()
}

fetchEvents()