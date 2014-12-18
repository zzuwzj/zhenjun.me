var HelloMessage = React.createClass({
  render: function() {
    return <div class>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="Vistor" />, document.getElementById('hello'));

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>You have stayed here: {this.state.secondsElapsed} seconds</div>
    );
  }
});

React.render(<Timer />, document.getElementById('timer'));