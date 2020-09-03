import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li className="twelve columns" key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row"> 
           <div className="six columns social-links">
              {networks}
           </div>
<br/>  </div>
           <ul className="copyright">
              <li> <a href="#">&copy; 2020 Jon Christie</a></li>
              <li> <a href="tel:1-919-368-3369">(919) 368-3369</a></li>
              <li><a href="fullstack11235@gmail.com">fullstack11235@gmail.com</a></li>
           </ul>

      
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
   
  </footer>
    );
  }
}

export default Footer;
