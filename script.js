async function loadEmployees() {

const response = await fetch("employees.json")

const employees = await response.json()

return employees.map(emp => ({
id: emp.id,
title: emp.name
}))

}

async function initCalendar() {

const employees = await loadEmployees()

const calendarEl = document.getElementById("calendar")

const calendar = new FullCalendar.Calendar(calendarEl, {

schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",

initialView: "resourceTimelineWeek",

resources: employees,

headerToolbar: {
left: "prev,next today",
center: "title",
right: "resourceTimelineDay,resourceTimelineWeek"
},

slotDuration: "24:00:00",

slotLabelFormat: {
weekday: "short",
day: "numeric"
},

height: "auto"

})

calendar.render()

}

document.addEventListener("DOMContentLoaded", initCalendar)
