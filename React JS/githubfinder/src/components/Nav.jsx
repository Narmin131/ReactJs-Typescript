import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
    <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger d-flex ">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" href={this.props.url}>
            <i class={this.props.logo}></i>
            {this.props.text}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

export default Nav;