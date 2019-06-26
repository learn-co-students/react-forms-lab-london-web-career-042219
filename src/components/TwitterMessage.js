import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <h3>
          {this.props.maxChars - this.state.message.length} characters remaining
        </h3>
      </div>

      // added value and onChange to add the attributes to input to show that this is a controlled component and as such, that it should update on every chnage to the input.

      // showed the remaining characters component.
    );
  }
}

export default TwitterMessage;
