import React, { Component } from 'react';
import M from 'materialize-css';
import { Carousel } from 'react-materialize';

import '../assets/main.css';

class Landing extends Component {
	componentDidMount() {
		const options = {
			duration: 300,
			onCycleTo: () => {
				console.log('New Slide');
			},
		};
		M.Carousel.init(this.Carousel, options);
	}
	render() {
		return (
			<Carousel
				carouselId="Carousel-2"
				className=" center #ec407a white "
				options={{
					fullWidth: true,
					indicators: true,
				}}
			>
				<div className>
					<h2>Seu site de controle de Gasto</h2>
					<p>gerencie orçamento de forma simples e fácil</p>
				</div>
				<div className>
					<h2>Seu site de controle de Gasto</h2>
					<p>Dashbord com graficos para fácil visualização.</p>
				</div>
				<div className>
					<h2>Seu site de controle de Gasto</h2>
					<p>Crie o hábito e melhore a sua financeira</p>
				</div>
			</Carousel>
		);
	}
}
export default Landing;
