import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

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
				<h4>Gastos:</h4>

				<table>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Descrição</th>
							<th>Data</th>
							<th>Valor</th>
							<th>Opções:</th>
						</tr>
					</thead>
					<tbody>
						{this.state.registros.map((registro) => (
							<tr key={registro._id}>
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
											this.handleDeleteRegistro(registro)
										}
										type="button"
									>
										<FiTrash2
											size={20}
											color="#f08080"
										></FiTrash2>
									</button>
									<Link to={'/registro?id=' + registro._id}>
										<button
											className="trashButton"
											type="button"
										>
											<FiEdit
												size={20}
												color="#90ee90"
											></FiEdit>
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<h4>Renda:</h4>

				<table>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Descrição</th>
							<th>Data</th>
							<th>Valor</th>
							<th>Opções:</th>
						</tr>
					</thead>
					<tbody>
						{this.state.renda.map((registro) => (
							<tr key={registro._id}>
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
											this.handleDeleteRegistro(registro)
										}
										type="button"
									>
										<FiTrash2
											size={20}
											color="#f08080"
										></FiTrash2>
									</button>
									<Link to={'/registro?id=' + registro._id}>
										<button
											className="trashButton"
											type="button"
										>
											<FiEdit
												size={20}
												color="#90ee90"
											></FiEdit>
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>

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
