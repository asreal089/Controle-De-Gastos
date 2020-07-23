import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
const axios = require('axios');

class Home extends Component {
	constructor(props) {
		super(props);
		var registrosDoUser = getRegistros();
		this.state = { registros: registrosDoUser };
		//this.setRegsistros(registros);

		console.log(this.state);
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
		this.state = { registros: [] };
	}

	setRegsistros(gastos) {
		this.setState({ registros: gastos });
	}
	render() {
		return (
			<div className="container">
				<h3>Gastos cadastrados:</h3>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

async function getRegistros() {
	var res = await axios.get('api/gastos');
	res = res.data;
	return res;
}
export default connect(mapStateToProps, actions)(Home);
