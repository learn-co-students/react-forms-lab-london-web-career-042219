import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

      this.state = {
		  username: "",
		  password: ""
	  };
  }

	onChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleLogin = (e) => {
		e.preventDefault();
		if(this.state.username != "" && this.state.password != "") {
			this.props.handleLogin(e);
		}
	}
	
	render() {
		return (
			<form onSubmit={this.handleLogin}>
				<div>
					<label>
						Username
						<input id="username" name="username" type="text" onChange={this.onChangeHandler} value={this.state.username} />
					</label>
				</div>
				<div>
					<label>
						Password
						<input id="password" name="password" type="password" onChange={this.onChangeHandler} value={this.state.username}/>
					</label>
				</div>
				<div>
					<button type="submit">Log in</button>
				</div>
			</form>
		);
  }
}

export default LoginForm;
