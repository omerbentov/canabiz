import React, { Component } from "react";
import authService from "../services/authService";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    account: {
      firstName: "",
      email: "",
      password: "",
      phone: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var isSigned = await authService.signUp(
        this.state.account.firstName,
        this.state.account.email,
        this.state.account.password,
        this.state.account.phone
      );

      if (isSigned) {
        alert("Signed Up :)");
        window.location.href = "/";
      }
    } catch (e) {
      alert(e);
    }
  };

  handleChange = async (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    await this.setState({ account });
    console.log(account);
  };

  render() {
    return (
      <div id="register">
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Sign up</p>

          <div className="form-row mb-4">
            <div className="col">
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="First name"
                ref={this.firstName}
                name="firstName"
                value={this.state.account.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="defaultRegisterFormLastName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>

          <input
            type="email"
            id="defaultRegisterFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
            ref={this.email}
            name="email"
            value={this.state.account.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            id="defaultRegisterFormPassword"
            className="form-control"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
            ref={this.password}
            name="password"
            value={this.state.account.password}
            onChange={this.handleChange}
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>

          <input
            type="text"
            id="defaultRegisterPhonePassword"
            className="form-control"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
            ref={this.phone}
            name="phone"
            value={this.state.account.phone}
            onChange={this.handleChange}
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            className="form-text text-muted mb-4"
          >
            Optional - for two step authentication
          </small>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>
          </div>

          <button
            onClick={this.handleSubmit}
            className="btn btn-info my-4 btn-block"
            type="submit"
          >
            Sign up
          </button>

          <p>or sign up with:</p>

          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text"></i>
          </a>

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">
              terms of service
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
