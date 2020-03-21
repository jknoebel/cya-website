import request from 'superagent'

let base_url = `https://www.googleapis.com/calendar/v3/calendars/`
let API_KEY = `AIzaSyCzyCcclIJ4F25TTAAaKbpzJJT-UoALr1k`
let CALENDAR_ID = `c55hc7s94pi67k9j16cn85tbas@group.calendar.google.com`
let event_url = `${base_url}${CALENDAR_ID}/events?key=${API_KEY}`


async function getRecurringEvents(event) {
    let recurring_event_url = `${base_url}${CALENDAR_ID}/events/${event.id}/instances?key=${API_KEY}&maxResults=50`
    const resp = await request.get(recurring_event_url)
    const events = []
    JSON.parse(resp.text).items.map((event) => {
        events.push({
            id: event.id,
            start: new Date(event.start.date || event.start.dateTime),
            end: new Date(event.end.date || event.end.dateTime),
            title: event.summary,
        })
    })
    return events
}

export function getEvents(callback) {
    request
        .get(event_url)
        .then(resp => {
            const events = []
            const promises = []
            JSON.parse(resp.text).items.map((event) => {
                if ('recurrence' in event) {
                    let recurring_events_promise = getRecurringEvents(event)
                    promises.push(recurring_events_promise)
                } else {
                    events.push({
                        id: event.id,
                        start: new Date(event.start.date || event.start.dateTime),
                        end: new Date(event.end.date || event.end.dateTime),
                        title: event.summary,
                    })
                }
            })
            console.log(promises)
            Promise.all(promises).then(function (array_of_recurring_events) {
                array_of_recurring_events.forEach(recurring_events => {
                    console.log(recurring_events)
                    events.push.apply(events, recurring_events)
                })
                callback(events)
            })
        })
}
