import React, { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="brand-logo">DC Events</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
