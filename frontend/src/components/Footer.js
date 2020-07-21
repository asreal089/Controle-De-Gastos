import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer class="page-footer">
				<div class="footer-copyright">
					<div class="container">
						<p class="grey-text text-lighten-4">
							“A chave para a vitória é criar as rotinas certas.”
							-<strong>Charles Duhigg</strong>
						</p>
					</div>

					<p>Entre em contato: </p>
					<a
						class="grey-text text-lighten-4 right"
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
