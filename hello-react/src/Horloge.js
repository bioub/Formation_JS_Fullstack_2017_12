import React, { Component } from 'react';
import format from 'date-fns/format'

class Horloge extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
      intervalId: 0
    };
    this.stop = this.stop.bind(this);
  }
  componentWillMount() {
    this.start();
  }
  start() {
    const intervalId = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, this.props.delay);
    this.setState({
      intervalId,
    });
  }
  stop(e) {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
  }
  render() {
    const p = <p>{format(this.state.now, this.props.format)}</p>
    return (
      <div>
        {p}
        <button onClick={this.stop}>{(this.state) ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export { Horloge };
