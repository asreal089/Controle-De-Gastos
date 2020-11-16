import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FiTrash2, FiEdit } from 'react-icons/fi';
const moment = require('moment');
const axios = require('axios');

class TableRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registros: [],
		};
	}

	componentDidMount() {
		if (this.props.tipo_registro === 'Gastos') {
			axios.get('api/gastos').then((res) => {
				const registros = res.data;
				this.setState({ registros });
			});
		} else {
			axios.get('api/renda').then((res) => {
				const registros = res.data;
				this.setState({ registros });
			});
		}
	}

	handleDeleteRegistro = async (reg) => {
		await axios({
			method: 'DELETE',
			url: 'api/gastos',
			data: reg,
		}).then((res) => {
			if (this.props.tipo_registro === 'Gastos') {
				axios.get('api/gastos').then((res) => {
					const registros = res.data;
					this.setState({ registros });
				});
			} else {
				axios.get('api/renda').then((res) => {
					const registros = res.data;
					this.setState({ registros });
				});
			}
		});
	};

	render() {
		return (
			<div>
				<h4>{this.props.tipo_registro}</h4>

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
								<td>
									{moment(registro.data).format('DD-MM-YYYY')}
								</td>
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
										<FiTrash2 className="Fi-button"></FiTrash2>
									</button>
									<Link to={'/registro?id=' + registro._id}>
										<button
											className="trashButton"
											type="button"
										>
											<FiEdit
												className= "Fi-button"
											></FiEdit>
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(TableRegister);
