import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

      this.state = {
		  message: ""
	  };
  }

	onChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  render() {
    return (
		<div>
			<strong>Your message:</strong>
			<input type="text" name="message" id="message" value={this.state.message} onChange={this.onChangeHandler} />
			<p>{this.props.maxChars - this.state.message.length}</p>
		</div>
    );
  }
}

export default TwitterMessage;
