import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
    };
    this.timeInterval = null;
    this.setClock = this.setClock.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <>
        <div className='item-clock'>
          <p>{this.props.clocksSetup.name}</p>
          <p className='timer'>
            {this.state.hour < 10 ? `0${this.state.hour}` : this.state.hour}:
            {this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute}:
            {this.state.second < 10 ? `0${this.state.second}` : this.state.second}</p>
          <div className="close" onClick={this.handleClose}>&#x2716;</div>
        </div>
      </>
    );
  }

  handleClose() {
    this.props.onClose(this.props.clocksSetup.id);
  }

  setClock() {
    const date = new Date();
    const h = parseInt(date.getUTCHours(), 10) + parseInt(this.props.clocksSetup.timeZone, 10);
    const m = parseInt(date.getUTCMinutes(), 10);
    const s = parseInt(date.getUTCSeconds(), 10);

    this.setState({
      hour: h,
      minute: m,
      second: s,
    });
  }

  componentDidMount() {
    this.setClock();
    this.timeInterval = setInterval(this.setClock, 1000);
  }

  componentWillUnmount() {
    this.timeInterval = clearInterval(this.timeInterval);
  }
}

ClockItem.propTypes = {
  clocksSetup: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
