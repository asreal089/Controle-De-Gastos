import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return '';
			case false:
				return (
					<li>
						<a href="/auth">Log In With Google</a>
					</li>
				);

			default:
				return (
					<span>
						<li>
							<Link to={'/registro'}>Novo Registro</Link>
						</li>

						<li>
							<a href="/auth/logout">
								<button type="button">
									<FiPower size={18} color="#FFF" />
								</button>
							</a>
						</li>
					</span>
				);
		}
	}

	render() {
		return (
			<nav id="header">
				<div className="nav-wrapper">
					<Link
						id="logo"
						to={this.props.auth ? '/home' : '/'}
						className="brand-logo"
						style={{ width: '20%' }}
					>
						CG
					</Link>

					<ul id="nav-mobile" className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
