import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.textInput}
          onChange={e => this.handleChange(e)}
        />
        <p>
          {this.props.maxChars - this.state.textInput.length} characters left
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
