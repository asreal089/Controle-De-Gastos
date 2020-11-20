import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import TableRegister from './TableRegister';
import GraficoPizza from './GraficoPizza';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

class Home extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
		
	}
	
	state={
		month: 0
	};

	returnMonth(month){
		let mes = month % 12;
		if (mes === 0) {
		  return("Janeiro");
		} if (mes === 1) {
		  return("Fevereiro");
		} if (mes === 2) {
		  return("Março");
		} else if (mes === 3) {
		  return("Abril");
		} else if (mes === 4) {
		  return("Maio");
		} else if (mes === 5) {
		  return("Junho");
		} else if (mes === 6) {
		  return("Julho");
		} else if (mes === 7) {
		  return("Agosto");
		} else if (mes === 8) {
		  return("Setembro");
		} else if (mes === 9) {
		  return("Outubro");
		} else if (mes === 10) {
		  return("Novembro");
		} else if (mes === 11) {
		  return("Dezembro");
		}
	}
	
	handleMonthAdd () {
		this.setState({
	      month: this.state.month + 1
		});
		this.forceUpdate();	
	};

	handleMonthSub () {
		this.setState({
	      month: this.state.month - 1
		});
		this.forceUpdate();	
	};
	
	render() {
		const newDate = new Date();
		this.returnMonth(newDate.getMonth());
		return (
			<div className="registros_container">
				<GraficoPizza month={this.state.month} />
				<ul className="pagination">
					<li >
						<button
							className="trashButton"
							onClick={() =>
								this.handleMonthSub()
							}
							type="button"
						>
							<FiArrowLeft className="Fi-button"></FiArrowLeft>
						</button></li>
					<li >{this.returnMonth(newDate.getMonth() - this.state.month)}</li>
					 <li >
						<button
							className="trashButton"
							onClick={() =>
								this.handleMonthAdd()
							}
							type="button"
						>
							<FiArrowRight className="Fi-button"></FiArrowRight>
						</button></li>
				</ul>
				<TableRegister tipo_registro="Gastos" month={this.state.month} />
				<TableRegister tipo_registro="Fontes de Renda" month={this.state.month} />

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
