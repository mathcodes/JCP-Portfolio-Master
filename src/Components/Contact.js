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
              <h4>Address and Phone</h4>
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
            <div className="widget widget_tweets">
              <h5>Latest Posts from</h5>
              <h6>
                <a href="www.weekly-stack.com">www.weekly-stack.com</a>
              </h6>

              <ul id="weeklystack">
                <li>
                  •{" "}
                  <a href="https://weekly-stack.com/state-ly-react/">
                    “State”-ly React
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="https://weekly-stack.com/the-benefits-of-a-coding-bootcamp/">
                    The Benefits of a Coding Bootcamp
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="https://weekly-stack.com/code-in-the-mirror/">
                    “State”-ly React
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="https://weekly-stack.com/why-the-weekly-stack/">
                    Why the Weekly-Stack?
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
