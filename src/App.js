import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

//Now that we know how to handle form elements in React and how to set up controlled components, it's time to put that knowledge to the test.

class App extends Component {
  login = (username, password ) => { //this had additional curlies messing stuff up
    //e.persist();
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>
        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={140} />
      </div>
    );
  }
}

export default App;
