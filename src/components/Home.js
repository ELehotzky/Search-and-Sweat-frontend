import React from "react";


class Home extends React.Component {
	
	handleClick = (event) => {
	console.log(event.type);
	}

	render() {
	return (
	    <div>
		    <h1>Home!</h1>
		    <div>
		    	<button onClick={this.handleClick}>Explore Classes</button>
		    </div>
	    </div>
	    )
	}
}

export default Home;