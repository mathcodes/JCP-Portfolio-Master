import React, { Component } from "react";


//   function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('txt').innerHTML =
//   h + ":" + m + ":" + s;
// }
// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }

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
        <nav id="nav-wrap1">
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <span className="headerName">Jon</span> Christie
            </h1>
            <h3>{bio}</h3>
            <hr />
            <ul className="social">
            <li><a href="http://github.com/mathcodes">
               <i class="gh fa fa-github" aria-hidden="true"></i>
            </a>
            </li>
            <li><a href="https://www.linkedin.com/in/jonpchristie">
               <i class="li fa fa-linkedin"></i>
            </a>
            </li>
            <li><a href="https://twitter.com/jonpchristie">
               <i class="tw fa fa-twitter" aria-hidden="true"></i>
            </a>
            </li>
            <li><a href="https://www.instagram.com/jon011235">
               <i class="pi fa fa-instagram" aria-hidden="true"></i>
            </a>
            </li>
            <li><a href="https://open.spotify.com/artist/07S7aLfxH70VAX64g1WuFw?si=-HWhcERiSD69S_NfZEZ_lw">
               <i class="sp fa fa-spotify" aria-hidden="true"></i>
            </a>
            </li>
            <li><a href="https://www.youtube.com/channel/UC5GFnN-lv8Yuqc9O3b79k6g">
               <i class="yt fa fa-youtube" aria-hidden="true"></i>
            </a>
            </li>
            </ul>

            

<div id="txt"></div>


  


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
