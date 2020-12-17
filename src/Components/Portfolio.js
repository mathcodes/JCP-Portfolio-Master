import jquery from "jquery";
import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="row item-wrap bgrid-thirds .s-bgrid-halves cf">
            <p classname="projectTitle">{projects.title}</p> 
              <a href={projects.url} title={projects.title}>
                <img
                  className="imgPortfolio"
                  alt={projects.title}
                  src={projectImage}
                  width="90%"
                  height="90%"
                />

               
                  <div className="portfolio-item-meta">
                    
                    <h6 className="h6PortHov">Technology Used:</h6>
                    <p>{projects.technology}</p>
                    <h6 className="h6PortHov">Description:</h6>
                    <p>{projects.description}</p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn ghbtn"
                      title="GitHub"
                      data-content=" "
                      href={projects.repoUrl}
                    >
                      <i className="fa fa-github"></i>
                    </button>

                    <button
                      type="button"
                      class="btn repobtn"
                      title="Repo"
                      data-content=" "
                      href={projects.repoUrl}
                    >
                      <i className="fa fa-folder-open"></i>
                    </button>
               
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row container">
          <h1>
            <span>Portfolio</span>
          </h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters .s-bgrid-halves cf"
          >
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
