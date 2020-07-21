import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NovoGasto extends Component {
	render() {
		return <h1>olar novo gasto</h1>;
	}
}

export default connect(null, actions)(NovoGasto);
