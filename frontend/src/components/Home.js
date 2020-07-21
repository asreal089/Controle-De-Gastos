import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	render() {
		return <h1>olar home</h1>;
	}
}

export default connect(null, actions)(Home);
