import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import { getEvents } from './events';
import moment from 'moment';

import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

let formats = {

    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'ddd MM/DD', culture),

    // dayRangeHeaderFormat: ({ start, end }, culture, local) =>
    //     local.format(start, { date: 'short' }, culture) + ' — ' +
    //     local.format(end, { date: 'short' }, culture)
}

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
            <div className="BigCalendar" {...this.props}>
                <BigCalendar
                    popup
                    defaultView='agenda'
                    formats={formats}
                    events={this.state.events}
                />
            </div>
        )
    }
}
