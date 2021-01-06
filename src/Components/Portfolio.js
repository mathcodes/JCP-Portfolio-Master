import jquery from "jquery";
import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      
      <section id="portfolio" style={{"background-image": "linear-gradient(0deg,#00BECC 0%, #222222 2%, #888888 50%, rgb(11,11,11) 100%)"}}>
      
      <div className="row container">
            <div className="twelve columns flex-container">
              <h1>
                <span className="portTitle">Portfolio</span>
              </h1>
            </div>
          </div>
        <div className="container portfolioCont">
          <div className="row portRow">
            {/*------------------ Card 1 ------------------*/}
            <div className="col row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div
                className="card"
                style={{ width: "30rem", "margin-top": "2rem" }}
              >
                <img
                  src="https://raw.githubusercontent.com/mathcodes/jcp2.0.1/Main/public/images/portfolio/superPantryBuddy.png"
                  className="card-img-top"
                  alt="..."
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-itemTitle">
                    <h5>Super Pantry Buddy</h5>
                  </li>
                  <li className="list-group-itemTech">
                    <span className="boldDescr">Tech: </span>MongoDB, React,
                    Express, Node, Bulma, ChartJS, Mongo Atlas
                  </li>
                  <li className="list-group-itemDesc">
                    <span className="boldDescr">Description: </span>This
                    full-stack group project has users log in and search for
                    recipes by entering in ingredients they have, as well as other
                    filtering options. Recipes can be saved to user's library,
                    deleted from library, and viewed with more details including
                    detailed instructions and a full ingredient list.
                  </li>
                </ul>
                <div className="card-bodyLinks">
                  <a href="https://github.com/mathcodes/SuperPantryBuddy">
                    <button type="button" className="btn ghbtn" title="GitHub">
                      <i class="fa fa-github"></i>
                    </button>
                  </a>
                  <a href="https://superpantrybuddy.herokuapp.com/">
                    <button type="button" className="btn repobtn" title="Live">
                      <i class="fa fa-globe"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/*------------------ Card 2 ------------------*/}
            <div className="col row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div
                className="card"
                style={{ width: "30rem", "margin-top": "2rem" }}
              >
                <img
                  src="https://raw.githubusercontent.com/mathcodes/jcp2.0.1/Main/public/images/portfolio/MarsProject.png  "
                  className="card-img-top"
                  alt="..."
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-itemTitle">
                    <h5>Red Planet Voyager</h5>
                  </li>
                  <li className="list-group-itemTech">
                    <span className="boldDescr">Tech: </span>Node, Express, Handlebars, ChartJS, MySQL, Sequelize ORM, APIs
                  </li>
                  <li className="list-group-itemDesc">
                    <span className="boldDescr">Description: </span>This is a
                    group project utilizing databases and the servers and routes
                    necessary to do save data to the back end. Users can login and
                    signup to be notified of X-Space launches, as well as view the
                    weather on Mars as text as well as charts using ChartJS.
                  </li>
                </ul>
                <div className="card-bodyLinks">
                  <a href="https://github.com/mathcodes/Project-2">
                    <button type="button" className="btn ghbtn" title="GitHub">
                      <i class="fa fa-github"></i>
                    </button>
                  </a>
                  <a href="https://team-5-project-2.herokuapp.com/">
                    <button type="button" className="btn repobtn" title="Live">
                      <i class="fa fa-globe"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/*------------------ Card 3 ------------------*/}
            <div className="col row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div
                className="card"
                style={{ width: "30rem", "margin-top": "2rem" }}
              >
                <img
                  src="https://raw.githubusercontent.com/mathcodes/jcp2.0.1/Main/public/images/portfolio/FuelUp.png"
                  className="card-img-top"
                  alt="..."
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-itemTitle">
                    <h5>Fuel Up!</h5>
                  </li>
                  <li className="list-group-itemTech">
                    <span className="boldDescr">Tech: </span>Server-side APIs, Materialize, jQuery, CSS and UI styling, JS for a Dynamic and interactive user experience
                  </li>
                  <li className="list-group-itemDesc">
                    <span className="boldDescr">Description: </span>Fuel Up allows users to find the closest fueling stations for both gas-powered and electric-powered vehicles. My tasks included researching server-side APIs to create a feasible concept for the project, then setting up the routes and implementing the APIs to render user-friendly inofrmaotion in the UI. 
                  </li>
                </ul>
                <div className="card-bodyLinks">
                  <a href="https://github.com/Team6DiamondPlatipi/TechnicallyAMammal">
                    <button type="button" className="btn ghbtn" title="GitHub">
                      <i class="fa fa-github"></i>
                    </button>
                  </a>
                  <a href="https://team6diamondplatipi.github.io/TechnicallyAMammal/">
                    <button type="button" className="btn repobtn" title="Live">
                      <i class="fa fa-globe"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/*------------------ Card 4 ------------------*/}
            <div className="col row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div
                className="card"
                style={{ width: "30rem", "margin-top": "2rem" }}
              >
                <img
                  src="https://raw.githubusercontent.com/mathcodes/jcp2.0.1/Main/public/images/portfolio/Pick2Hand.jpg"
                  className="card-img-top"
                  alt="..."
                />

                <ul className="list-group list-group-flush">
                  <li className="list-group-itemTitle">
                    <h5>Pick2Hand</h5>
                  </li>
                  <li className="list-group-itemTech">
                    <span className="boldDescr">Tech: </span>React, Sass, Babel, Firebase Animations using CSS and JS, NEW and challenging self-taught JS implemented 
                  </li>
                  <li className="list-group-itemDesc">
                    <span className="boldDescr">Description: </span>This react-based 2d platformer was something I created as a solo project. With 3 levels, new JS not covered in bootcamp, a Firebase DB to store top scores for users, animations and functional controls made this a A GREAT learning experience and simply a FUN game!!!
                  </li>
                </ul>
                <div className="card-bodyLinks">
                  <a href="https://github.com/mathcodes/pick2hand/">
                    <button type="button" className="btn ghbtn" title="GitHub">
                      <i class="fa fa-github"></i>
                    </button>
                  </a>
                  <a href="https://mathcodes.github.io/pick2hand/">
                    <button type="button" className="btn repobtn" title="Live">
                      <i class="fa fa-globe"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
