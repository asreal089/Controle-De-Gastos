import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="page-footer">
				<div className="footer-copyright">
					<div className="container">
						<p className="grey-text text-lighten-4">
							“A chave para a vitória é criar as rotinas certas.”
							-<strong>Charles Duhigg</strong>
						</p>
					</div>

					<p>Entre em contato: </p>
					<a
						className="grey-text text-lighten-4 right"
						href="mailto:contato@controle.de.gasto.com.br"
					>
						contato@controle.de.gasto.com.br
					</a>
				</div>
			</footer>
		);
	}
}
export default Footer;
