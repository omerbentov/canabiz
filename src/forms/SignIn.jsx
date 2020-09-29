import React, { Component } from "react";
import axios from "axios";

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    account: {
      email: "",
      password: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: jwt } = await axios.post("http://localhost:3000/auth", {
        email: this.state.account.email,
        password: this.state.account.password,
      });
      if (jwt) {
        alert("Logged in...");
        localStorage.setItem("token", jwt);
        window.location.href = "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("Invalid E-mail or password");
      }
    }
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    console.log(account);
  };

  render() {
    return (
      <div>
        <form className="border border-light p-5" onSubmit={this.handleSubmit}>
          <p className="h4 mb-4 text-center">Sign in</p>

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
            ref={this.email}
            name="email"
            value={this.state.account.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
            ref={this.password}
            name="password"
            value={this.state.account.password}
            onChange={this.handleChange}
          />

          <div className="d-flex justify-content-between">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button className="btn btn-info btn-block my-4" type="submit">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member?
              <a href="">Register</a>
            </p>

            <p>or sign in with:</p>
            <a type="button" className="white-text mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a type="button" className="white-text mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a type="button" className="white-text mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a type="button" className="white-text mx-2">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
