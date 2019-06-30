import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userNameValue: "",
      passwordValue: ""
    };
  }

  handleChange = e => {
    //e.persist();
    console.log(this.state.userNameValue);
    this.setState({
      userNameValue: e.target.value
    });
  };

  changePassState = e => {
    this.setState({
      passwordValue: e.target.value
    });
    console.log(this.state.passwordValue);
  };

  handleSubmit = (event, name, pass) => {
    debugger;
    event.preventDefault();
    if (name != "" && pass != "") {
      this.props.handleLogin(name, pass);
    } else {
      console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(
            e,
            this.state.userNameValue,
            this.state.passwordValue
          );
        }}
      >
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.userNameValue}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.passwordValue}
              onChange={this.changePassState}
            />
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
