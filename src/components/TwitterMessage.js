import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.message}
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
        />
        <p>{this.props.maxChars - this.state.message.length} characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
