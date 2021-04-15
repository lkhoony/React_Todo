import React from 'react'

function FormattedDate(props){
  
    return <div className="mb-1">{props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}</div>
  
}

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {

        return(
            <div>
                <FormattedDate date = {this.state.date}/>
            </div>
        );

    }
}

export default Clock;