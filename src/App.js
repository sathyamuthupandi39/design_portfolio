import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sadhana Lokesh",
      headerLinks: [
        { title: "Home", path: "/design_portfolio" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "My work",
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Lets talk :)",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom"
            bg="dark"
            expand="md"
            variant="dark"
          >
            <Navbar.Brand>Sadhana Lokesh</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-control="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/design_portfolio">
                  My Work
                </Link>
                <Link className="nav-link" to="/about">
                  About me
                </Link>
                {/* <Link className="nav-link" to="/contact">
                  Contact
                </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/design_portfolio"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          {/* <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          /> */}
        </Container>
        <Footer />
      </Router>
    );
  }
}
export default App;
