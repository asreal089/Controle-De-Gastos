import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PieChartGastos from './PieChartGastos';

const axios = require('axios');

class Home extends Component {
	state = {
		registros: [],
	};

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}

		axios.get('api/gastos').then((res) => {
			const registros = res.data;
			this.setState({ registros });
		});
	}

	render() {
		return (
			<div className="registros_container">
				<h3>Gastos cadastrados:</h3>
				<div>
					<PieChartGastos dados={this.state.registros} />
				</div>

				<table>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Descrição</th>
							<th>Data</th>
							<th>Valor</th>
							<th>Deletar</th>
						</tr>
					</thead>
					<tbody>
						{this.state.registros.map((registro) => (
							<tr key={registro.id}>
								<td>{registro.tipo}</td>
								<td>{registro.descricao}</td>
								<td>{registro.data}</td>
								<td>
									{Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									}).format(registro.valor)}
								</td>
								<td>
									<button
										className="trashButton"
										onClick={() =>
											handleDeleteIncident(registro.id)
										}
										type="button"
									>
										<FiTrash2
											size={20}
											color="#FF0000"
										></FiTrash2>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<Link className="button" to="/registro">
					Cadastrar Novo Caso
				</Link>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

function handleDeleteIncident(event) {
	alert('Registro deletado');
}

function handleLogout(event) {
	alert('Voce esta se desligando');
}

export default connect(mapStateToProps, actions)(Home);
