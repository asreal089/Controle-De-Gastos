import '../assets/materialize/css/materialize.min.css';
import '../assets/main.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NovoRegistro from './NovoRegistro';
import Lading from './Landing';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component={Lading} />
						<Route exact={true} path="/home" component={Home} />
						<Route
							exact={true}
							path="/registro"
							component={NovoRegistro}
						/>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
