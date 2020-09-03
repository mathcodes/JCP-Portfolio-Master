import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap bgrid-thirds .s-bgrid-halves cf">
            <a href={projects.url} title={projects.title}>
              <img className="imgPortfolio" alt={projects.title} src={projectImage} />
              
               <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h3>{projects.title}</h3>
                      <h4 className="h6PortHov">Technology Used:</h4>
                      <p>{projects.technology}</p>
                  <h4 className="h6PortHov">Description:</h4>
                  <p>{projects.description}</p>
                  </div>
                </div>
            </a>
            <h6 className="descr">Description:</h6>
                      <p className="descr">{projects.description}</p> 
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

       

            <h1><span>Portfolio</span></h1>

            <div id="portfolio-wrapper" className="bgrid-fifths .s-bgrid-halves cf push-1">
                {projects}
            </div>
       
      </div>
   </section>
    );
  }
}

export default Portfolio;
