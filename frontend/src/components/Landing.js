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
				<div className="carousel-item">
					<h2>Seu site de controle de Gasto</h2>
					<p>gerencie orçamento de forma simples e fácil</p>
					<div className="carousel-fixed-item center">
						<a
							href="/auth"
							className="btn waves-effect white grey-text darken-text-2"
						>
							Log with Google
						</a>
					</div>
				</div>
				<div className="carousel-item">
					<h2>Seu site de controle de Gasto</h2>
					<p>Dashbord com graficos para fácil visualização.</p>
					<div className="carousel-fixed-item center">
						<a
							href="/auth"
							className="btn waves-effect white grey-text darken-text-2"
						>
							Log with Google
						</a>
					</div>
				</div>
				<div className="carousel-item">
					<h2>Seu site de controle de Gasto</h2>
					<p>Crie o hábito e melhore a sua financeira</p>
					<div className="carousel-fixed-item center">
						<a
							href="/auth"
							className="btn waves-effect white grey-text darken-text-2"
						>
							Log with Google
						</a>
					</div>
				</div>
			</Carousel>
		);
	}
}
export default Landing;
