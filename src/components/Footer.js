import React, {Component} from "react";

export default class Footer extends Component {

	render() {
		return(
			<div id="page-wrapper">
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <hr />
                  <section className="contact">
                    <header>
                      <h3>Want to see more?</h3>
                    </header>
                    <p>This site was created by Erica Lehotzky, a Full Stack Software Engineering student at Flatiron School.</p>
                    <ul className="icons">
                      <li><a href="https://twitter.com/ericalehotzky" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="https://www.linkedin.com/in/ericalehotzky/" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
                      <li><a href="https://github.com/elehotzky" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">Linkedin</span></a></li>
                    </ul>
                  </section>
                  </div>
                  </div>
              </div>
            </div>
         </div>
		)
	}
}