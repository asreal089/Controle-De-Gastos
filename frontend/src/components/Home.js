import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import TableRegister from './TableRegister';
import GraficoPizza from './GraficoPizza';

class Home extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
		this.state={
			month: 0,
		};
	}

	render() {
		return (
			<div className="registros_container">
				<GraficoPizza month={2} />
				<TableRegister tipo_registro="Gastos" month={2} />
				<TableRegister tipo_registro="Fontes de Renda" month={2} />

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
