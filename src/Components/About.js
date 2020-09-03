import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
        <div className="row .bgrid-thirds">
          <div className="three columns">
            <img
              className="profile-pic"
              src="./images/headshot.jpg"
              alt="Jon Christie Profile Pic"
            />{" "}
            <h2>Contact Details</h2>
            <p className="address">
              {name}
              <br />
              106 Barbee Ct.
              <br />
              {city}, {state} {zip}
              <br />
              {phone}
              <br />
              <span>
                <a href="mailto:fullstack11235@gmail.com">{email}</a>
              </span>
            </p>
          </div>
          <div className="seven columns">
            <h2>About Me</h2>
            <p>
                   Since 2001 when I moved into Morrison Dorm on Carolina's south
                   campus, just a few miles away from my current home, I have been
                   either studying numbers, teaching numbers, or using numbers to
                   create music. Having indulged myself so deeply in the wonders of
                   mathematics and music begs the question, "Why did I not become a 
                   web developer 20 years ago?" Well hind sight is 20-20, right? Or 
              is it? <br /><br />Either way, I've gathered quite an array of usefull skills
                   to bring to the web industry, and whatever
              lead me to the room I'm in today has provide me, and your company, with a
              fresh mind, eager for problems to solve, time to save, lives to enrich, and money to make. In
              addition to my coding-related experiences I have been keeping the
              actual practice and implementation of coding languages and design close by my
              side as both a hobby and more importanatly, a way to increase productivity and
              quality of work.<br/> <br/>Thank you for stopping by and seeing what I
              have to offer. I hope my portfolio invokes questions and
              spawns enough curiosity to hear back from you. Feel free to use my contact
              information under image in this section or a social media link to connect found at the top 
               and bottom of the site. Let's connect!
            </p>
            <div className="download">
              <p>
                <a href={resumeDownload} className="button" target="_blank">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
