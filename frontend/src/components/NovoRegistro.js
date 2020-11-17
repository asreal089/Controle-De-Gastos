import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import qs from 'qs';

const moment = require('moment');
const axios = require('axios');

class NovoRegistro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipo: 'Moradia',
			descricao: '',
			valor: '',
			data: moment().format('MM-DD-YYYY'),
			isRenda: false,
		};
	}

	myEditHandler = async (id) => {
		axios.get('api/gasto/' + id.id).then((res) => {
			const registro = res.data;
			this.setState({
				id: id.id,
				tipo: registro.tipo,
				descricao: registro.descricao,
				valor: registro.valor,
				data: registro.data,
				isRenda: registro.isRenda,
			});
		});
	};

	mySubmitHandler = async (event) => {
		event.preventDefault();
		if (this.state.id) {
			await axios({
				method: 'PUT',
				url: 'api/gastos',
				data: this.state,
			});
		} else {
			await axios({
				method: 'POST',
				url: 'api/gastos',
				data: this.state,
			});
		}

		this.props.history.push(`/home`);
	};
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({ [nam]: val });
	};

	toggleChangeRenda = (event) => {
		this.setState({
			isRenda: !this.state.isRenda,
		});
	};

	handleChangeData = (newDate) => {
		this.setState({
			data: newDate,
		});
	};

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
		const id = qs.parse(this.props.location.search, {
			ignoreQueryPrefix: true,
		});
		if (id.id) {
			this.myEditHandler(id);
		}
	}

	render() {
		return (
			<div className="defaultForm">
				<form onSubmit={this.mySubmitHandler}>
					<div className="container">
						<div className="switch">
							É Renda:
							<br />
							<label>
								<input
									name="isRenda"
									type="checkbox"
									onChange={this.toggleChangeRenda}
								/>
								<span className="lever"></span>
							</label>
						</div>

						<div className="dataInput">
							<input
								type="date"
								label="Data do Registro"
								value={this.state.data}
								name="data"
								onChange={this.myChangeHandler}
							/>
						</div>
						<select
							name="tipo"
							value={this.state.tipo}
							onChange={this.myChangeHandler}
							selected="Moradia"
						>
							<optgroup label="Gasto">
								<option value="Moradia">Moradia</option>
								<option value="Mercado">Mercado</option>
								<option value="Lazer">Lazer</option>
								<option value="Comer fora">Comer fora</option>
								<option value="Educação">Educação</option>
								<option value="Seguro">Seguro</option>
								<option value="Imposto">Imposto</option>
								<option value="Saúde">Saúde</option>
								<option value="Academia">Academia</option>
								<option value="Cartão">Cartão</option>
								<option value="Outros">Outros</option>
							</optgroup>
							<optgroup label="Renda">
								<option value="Salário">Salário</option>
								<option value="Renda extra">Renda Extra</option>
								<option value="Proventos">Proventos</option>
							</optgroup>
						</select>
					</div>

					<input
						placeholder="Descrição"
						type="text"
						value={this.state.descricao}
						name="descricao"
						onChange={this.myChangeHandler}
					/>
					<input
						name="valor"
						type="number"
						placeholder="Valor"
						value={this.state.valor}
						onChange={this.myChangeHandler}
					/>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(NovoRegistro);
