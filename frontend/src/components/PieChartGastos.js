import React, { Component } from 'react';
import { render } from 'react-dom';
import PieChart from 'highcharts-react-official';
import Highcharts from 'highcharts';

class PieChartGastos extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
						data: [
							{
								name: 'Chrome',
								y: 61.41,
								sliced: true,
								selected: true,
							},
							{
								name: 'Internet Explorer',
								y: 11.84,
							},
							{
								name: 'Firefox',
								y: 10.85,
							},
							{
								name: 'Edge',
								y: 4.67,
							},
							{
								name: 'Safari',
								y: 4.18,
							},
							{
								name: 'Sogou Explorer',
								y: 1.64,
							},
							{
								name: 'Opera',
								y: 1.6,
							},
							{
								name: 'QQ',
								y: 1.2,
							},
							{
								name: 'Other',
								y: 2.61,
							},
						],
					},
				],
			},
		};
	}

	initChild = () => {
		var dados = this.props.dados;
		var gastos = dados.filter((gasto) => gasto.isRenda == false);
		var renda = dados.filter((gasto) => gasto.isRenda == true);
		var gastosGrafico = [];
		gastos.forEach((element) => {
			/*this.state.options.series.data.push({
				name: element.tipo,
				y: element.valor,
			});*/
		});
		//console.log(gastosGrafico);
	};

	componentDidUpdate = () => this.initChild();

	render() {
		return (
			<div>
				{true && (
					<PieChart
						highcharts={Highcharts}
						options={this.state.options}
					/>
				)}
			</div>
		);
	}
}

export default PieChartGastos;
