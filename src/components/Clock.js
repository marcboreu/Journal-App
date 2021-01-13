import React from "react";
import moment from 'moment';

export default class Clock extends React.Component {
  clockInterval = "";
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };
    const { title } = this.props;
    return (
      <div className={"clock"}>
        <h3>{title}</h3>
        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div className={"digital-clock"}>
        {moment().format('HH:mm:ss')}
        </div>
      </div>
    );
  }

  handleDate() {
    let hours = moment().format('hh');
    let minutes = moment().format('mm');
    let seconds = moment().format('ss');

    this.setState({ hours, minutes, seconds });
  }
}



