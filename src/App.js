import React, { Component } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./pages/NotFoundPage";
import jwtService from "./services/jwtService";

// pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import DAdvicePage from "./pages/DAdvicePage";
import LogOut from "./components/LogOut";

class App extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    try {
      const user = jwtService.getCurrUser();
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div>
        <Navbar {...this.state.user} />
        <div className="content">
          <Switch>
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogOut} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/DAdvice" component={DAdvicePage} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
