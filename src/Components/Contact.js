import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="column header-col">
            <p className="lead">{message}</p>
          </div>
        </div>
        <div className="row">
          <aside className="six columns addressFooter footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact Details</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <a href="tel:1-919-368-3369">{phone}</a><br />
                <a href="fullstack11235@gmail.com">{email}</a> <br />
              </p>
            </div>
          </aside>
          <aside className="three columns addressFooter footer-widgets"></aside>
          <aside className="three columns blogFooter footer-widgets">
            
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
