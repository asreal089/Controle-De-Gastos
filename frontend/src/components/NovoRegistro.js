import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import { DatePicker } from 'react-materialize';

class NovoRegistro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipo: '',
			nome: '',
			valor: '',
			dataLancamento: '',
			isMensal: false,
			isRenda: false,
		};
	}

	mySubmitHandler = (event) => {
		event.preventDefault();
		console.log(this.state);
		alert('olar');
	};
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({ [nam]: val });
	};

	toggleChangeMensal = (event) => {
		this.setState({
			isMensal: !this.state.isMensal,
		});
	};

	toggleChangeRenda = (event) => {
		this.setState({
			isRenda: !this.state.isRenda,
		});
	};

	handleChangeData = (newDate) => {
		this.setState({
			dataLancamento: newDate,
		});
	};

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}

	render() {
		return (
			<div className="defaultForm">
				<form onSubmit={this.mySubmitHandler}>
					<div className="container">
						<div className="switch">
							É mensal:
							<br />
							<label>
								<input
									name="isMensal"
									type="checkbox"
									onChange={this.toggleChangeMensal}
								/>
								<span className="lever"></span>
							</label>
						</div>

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
								value={this.state.dataLancamento}
								name="dataLancamento"
								onChange={this.myChangeHandler}
							/>
						</div>
						<select
							name="tipo"
							value={this.state.tipo}
							onChange={this.myChangeHandler}
						>
							<optgroup label="Gasto">
								<option value="Moradia">Moradia</option>
								<option value="Mercado">Mercado</option>
								<option value="Lazer">Lazer</option>
								<option value="Comer fora">Comer fora</option>
								<option value="Educação">Educação</option>
								<option value="Saúde">Saúde</option>
								<option value="Academia">Academia</option>
								<option value="Outros">Outros</option>
							</optgroup>
							<optgroup label="Renda">
								<option value="Salário">Salário</option>
								<option value="Renda Extra">Renda Extra</option>
							</optgroup>
						</select>
					</div>

					<input
						placeholder="Nome"
						type="text"
						value={this.state.nome}
						name="nome"
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
