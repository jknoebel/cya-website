import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import { getEvents } from './events';
import moment from 'moment';

import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'

import './css/calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

let formats = {

    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'ddd MM/DD', culture),
        
    agendaHeaderFormat: ({ start, end }, culture, local) =>
        local.format(start, 'MM/DD', culture) + ' — ' +
        local.format(end, 'MM/DD', culture)
}


function EventAgenda({ event }) {
    return <span>
        <b>{event.title}</b>
        {/* <p> Location: {event.location}</p> */}
        <p>{event.description}</p>
    </span>
}

let subscriptionLink = "https://calendar.google.com/calendar/u/0/r?cid=c55hc7s94pi67k9j16cn85tbas@group.calendar.google.com"

export default class Calendar  extends React.Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        getEvents((events) => {
            this.setState({ events })
        })
    }
    render() {
        return (
            <div {...this.props} className="BigCalendar">
                <h3>CYA Calendar<a href={subscriptionLink} className="button small"><span className="label">Subscribe to Calendar</span></a>
                </h3>
                <BigCalendar
                    defaultView='agenda'
                    formats={formats}
                    events={this.state.events}
                    components={{
                        agenda: {
                            event: EventAgenda
                        }
                    }}
                />
            </div>
        )
    }
}
