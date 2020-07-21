import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NovoGasto extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return <h1>olar novo gasto</h1>;
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps, actions)(NovoGasto);
