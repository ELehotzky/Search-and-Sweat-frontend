import React, { Component } from 'react';

export default class CarouselSettings extends Component {
	render() {

		const settings = {
			className: "center",
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 5,
			swipeToSlide: true,
			afterChange: function(index) {
			console.log(
			`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
			);
		};


		return (
			<div>
				
			</div>
		);
	}
}
