import React from "react";

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    });
  }
  render() {
    return (
      <div className="time">
        <div>Updated Time: {this.state.time}</div>
      </div>
    );
  }
}
export default Clock;
