import React from 'react';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import { getEvents } from './events';
import moment from 'moment';

// import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'

// import './css/calendar.css'

// BigCalendar.setLocalizer(
//     BigCalendar.momentLocalizer(moment)
// );

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
        <p dangerouslySetInnerHTML={{__html: event.description}}></p>
    </span>
}

let subscriptionLink = "https://calendar.google.com/calendar/u/0/r?cid=c55hc7s94pi67k9j16cn85tbas@group.calendar.google.com"

export default class Calendar extends React.Component {
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
        const { to, staticContext, ...rest } = this.props;
        // return (
        //     <div {...rest} className="BigCalendar">
        //         <h3>CYA Calendar<a href={subscriptionLink} className="button small"><span className="label">Subscribe to Calendar</span></a>
        //         </h3>
        //         <BigCalendar
        //             defaultView='agenda'
        //             formats={formats}
        //             events={this.state.events}
        //             components={{
        //                 agenda: {
        //                     event: EventAgenda
        //                 }
        //             }}
        //         />
        //     </div>
        // )
        return (
            <FullCalendar
                plugins={[listPlugin]}
                initialView="listMonth"
                events={this.state.events}
                eventContent={EventAgenda}
            />
        )
    }
}
