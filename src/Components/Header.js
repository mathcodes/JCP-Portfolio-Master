import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
 
 

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home              
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <span className="headerName">Jon</span> Christie
            </h1>
            <h3>{bio}</h3>
            <hr />
            <p id="demoTime"></p>
<h6>It looks like its about <script>
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demoTime").innerHTML = d.toLocaleTimeString();
}
</script></h6>

          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
           
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
