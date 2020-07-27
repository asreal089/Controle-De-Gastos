import React, { Component } from 'react';
import { render } from 'react-dom';
import PieChart from 'highcharts-react-official';
import Highcharts from 'highcharts';

class PieChartGastos extends Component {
	constructor(props) {
		super(props);

		this.state = { options: null };

		var dados = this.props.dados;
		var gastos = dados.filter((gasto) => gasto.isRenda == false);
		const pieData = [];
		gastos.forEach((element) => {
			console.log(element);
			var temp = {
				name: element.tipo,
				y: element.valor,
			};
			pieData.push(temp);
		});
		const highchartsOptions = {
			options: {
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie',
				},
				title: {
					text: 'Gastos do Mês',
				},
				tooltip: {
					pointFormat:
						'{series.name}: <b>{point.percentage:.1f}%</b>',
				},
				accessibility: {
					point: {
						valueSuffix: '%',
					},
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format:
								'<b>{point.name}</b>: {point.percentage:.1f} %',
						},
					},
				},
				series: [
					{
						name: 'Gastos',
						colorByPoint: true,
						data: pieData,
					},
				],
			},
		};

		this.setState({ options: highchartsOptions });
	}

	render() {
		return (
			<div>
				<PieChart
					highcharts={Highcharts}
					options={this.state.options}
				/>
			</div>
		);
	}
}

export default PieChartGastos;
