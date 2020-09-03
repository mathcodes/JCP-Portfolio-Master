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
                />
             {" "}
            
               <h2>Contact Details</h2>
               <p className="address">
               {name} 
                  
               <br />
               106 Barbee Ct.
               <br />
               {city}
               <br />
                   {state}, {zip}
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
                  mathematics and music begs the question, <br />
                  "Why did I not become a web developer 20 years ago?" <br />
                  Well hind sight is 20-20, right? Or is it? All these experiences
                  lead me to the room I'm in today and provide me and you with a
                  fresh mind eager for problems to solve and time to save. In
                  addition to my coding-related experiences I have been keep the
                  actual practice and utilization of coding languages close by my
                  side as either a hobby or as a way to increase productivity and
                  quality of work. So thank you for stopping by and seeing what I
                  have to offer. I hope my portfolio invokes questions and
                  curiosities enough to hear back from you. Please use my contact
                  information below or a social media link to connect.
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
