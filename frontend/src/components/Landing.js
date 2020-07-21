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
				className="white-text center #ec407a pink lighten-1"
				options={{
					fullWidth: true,
					indicators: true,
				}}
			>
				<div className>
					<h2>O seu Site de Viagens</h2>
					<p>Faça seu login com google e escolha sua viagem</p>
				</div>
				<div className>
					<h2>O seu Site de Viagens</h2>
					<p>Escolha e agende voos, hoteis e passeios</p>
				</div>
				<div className>
					<h2>O seu Site de Viagens</h2>
					<p>Tudo num lugar só pra facilitar sua viagem</p>
				</div>
			</Carousel>
		);
	}
}
export default Landing;
