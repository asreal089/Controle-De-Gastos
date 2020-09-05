import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import TableRegister from './TableRegister';
const axios = require('axios');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registros: [],
			renda: [],
			totalTipo: [],
		};
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}

		axios.get('api/gastos').then((res) => {
			const registros = res.data;
			this.setState({ registros });
		});

		axios.get('api/renda').then((res) => {
			const renda = res.data;
			this.setState({ renda });
		});
	}

	handleDeleteRegistro = async (reg) => {
		await axios({
			method: 'DELETE',
			url: 'api/gastos',
			data: reg,
		}).then((res) => {
			axios.get('api/gastos').then((res) => {
				const registros = res.data;
				this.setState({ registros });
			});
		});
	};

	render() {
		return (
			<div className="registros_container">
				{this.state.registros && (
					<TableRegister
						name="Gastos"
						registros={this.state.registros}
					/>
				)}
				{this.state.renda && (
					<TableRegister
						name="Fontes de Renda"
						registros={this.state.renda}
					/>
				)}
				<Link className="button" to="/registro">
					Cadastrar Novo Registro
				</Link>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Home);
