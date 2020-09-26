import React from 'react';

export default class Event extends React.Component {
    state = {
        event: null
    }
    componentDidMount () {
        const { event_id } = this.props.match.params
        const event = event_id
        this.setState(() => ({ event }))
    }
    render() {
        return (
            <div className="Event">
                {this.state.event}
            </div>
        )
    }
}