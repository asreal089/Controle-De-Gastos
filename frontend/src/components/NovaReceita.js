import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NovaReceita extends Component {
	render() {
		return <h1>olar nova receita</h1>;
	}
}

export default connect(null, actions)(NovaReceita);
