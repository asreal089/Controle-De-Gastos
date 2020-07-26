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
				<Link className="button" to="/registro">
					Cadastrar Novo Caso
				</Link>
				<ul>
					{this.state.registros.map((registro) => (
						<div class="row">
							<div class="col s12 m6">
								<div class="card">
									<div class="card-content white-text">
										<span class="card-title">
											{registro.tipo}
										</span>

										<li key={registro.id}>
											<strong>DESCRIÇÃO:</strong>
											<p>{registro.descricao}</p>
											<strong>VALOR:</strong>
											<p>
												{Intl.NumberFormat('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												}).format(registro.valor)}
											</p>

											<button
												className="trashButton"
												onClick={() =>
													handleDeleteIncident(
														registro.id
													)
												}
												type="button"
											>
												<FiTrash2
													size={20}
													color="#FF0000"
												></FiTrash2>
											</button>
										</li>
									</div>
								</div>
							</div>
						</div>
					))}
				</ul>
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
