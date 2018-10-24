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
                      <h3>Nisl turpis nascetur interdum?</h3>
                    </header>
                    <p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
                    <ul className="icons">
                      <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
                      <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                      <li><a href="#" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
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