import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import events from './events';
import moment from 'moment';

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
    render() {
        return (
            <div className="BigCalendar" {...this.props}>
                <BigCalendar
                    popup
                    formats={formats}
                    events={events}
                    defaultDate={new Date(2015, 3, 1)}
                />
            </div>
        )
    }
}
