import React from "react";
import classApi from "../api/classApi.js"
import {connect} from "react-redux"
import Time from "react-time"
import Slider from "react-slick";

class FitnessClasses extends React.Component {
  
	componentDidMount(){
		classApi.getAllClasses()
		.then(data => {
			this.props.updateClasses(data)
		})
	}

	mapCategories(oneClass) {
		return (
			oneClass.fitness_class_categories.map((oneClass, index) => (
					<p key={index}>Type: {oneClass.categoryName}</p>
			))
		)
	}

	mapDetails(oneClass) {
		return (
			oneClass.fitness_class_details.map((oneClass, index) => (
					<p key={index}>Time: <Time value={oneClass.time} format="MM/DD/YYYY hh:mma" /></p>
			))
		)
	}

	checkIfFiltered = (fitnessClass) => {
		return fitnessClass.fitness_class_categories
			.map(category => category.categoryName.toLowerCase())
			.some( category => this.props.Filters.includes(category))
	}

	render() {

		if (this.props.FitnessClasses.length < 1) {
			return (
				<div>Loading...</div>)
		} else 
		return (
			<div>
				<div id="header" style={{"height": "25%"}}>
				<div className="inner">
					<header>
						<h1>Search for a Class</h1>
					</header>
				</div>
				</div>
				<Slider {...settings}>
		 		{this.props.FitnessClasses.filter(fClass => {
		 			return this.checkIfFiltered(fClass)
		 		})
		 			.map((oneClass, index) => (
						<div key={index} style={{"margin": "10px"}}>
							<a href="#" className="image featured"><img src={"images/pic01.jpg"} alt="" /></a>
							<header>
								<h3>{oneClass.name}</h3>
							</header>
							<p>{oneClass.studio.name} -- ${oneClass.price}</p>
							<p>{this.mapDetails(oneClass)}</p>
							<p>{this.mapCategories(oneClass)}</p>
						 	<p>- {oneClass.description}</p>
						</div>
						
				))}
			</Slider>
		 	</div>
		)
	}
}

const settings = {
	className: "center",
	infinite: false,
	centerPadding: "80px",
	slidesToShow: 4,
	swipeToSlide: true,
	responsive: [
		{
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
	]
};


function mapStateToProps(state) {
	return {
		FitnessClasses: state.FitnessClasses,
		Filters: state.Filters
	}
}

function updateClasses(data) {
	return {
		type: "ADD_CLASSES", payload: data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateClasses: (data) => dispatch(updateClasses(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(FitnessClasses)