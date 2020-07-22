import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NovoRegistro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			descricao: '',
			valor: '',
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

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}

	render() {
		return (
			<div className="defaultForm">
				<form onSubmit={this.mySubmitHandler}>
					<input
						placeholder="Nome"
						type="text"
						value={this.state.nome}
						name="nome"
						onChange={this.myChangeHandler}
					/>
					<input
						type="text"
						name="descricao"
						placeholder="Descrição"
						value={this.state.descricao}
						onChange={this.myChangeHandler}
					/>
					<input
						name="valor"
						type="number"
						placeholder="Valor"
						value={this.state.valor}
						onChange={this.myChangeHandler}
					/>
					<div className="container">
						<div className="switch">
							É mensal:
							<br />
							<div className="switch">
								<label>
									Não
									<input
										name="isMensal"
										type="checkbox"
										onChange={this.toggleChangeMensal}
									/>
									<span className="lever"></span>
									Sim
								</label>
							</div>
						</div>
						<div className="switch">
							É Renda:
							<br />
							<div className="switch">
								<label>
									Não
									<input
										name="isRenda"
										type="checkbox"
										onChange={this.toggleChangeRenda}
									/>
									<span className="lever"></span>
									Sim
								</label>
							</div>
						</div>
					</div>
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
