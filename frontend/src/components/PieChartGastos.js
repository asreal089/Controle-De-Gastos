import React, { Component } from 'react';
import { render } from 'react-dom';
import PieChart from 'highcharts-react-official';
import Highcharts from 'highcharts';

class PieChartGastos extends Component {
	initChild = () => {
		this.state = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
			},
			title: {
				text: 'Veja seu dados descriminados',
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
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
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					},
				},
			},
			series: {
				name: 'Brands',
				colorByPoint: true,
				data: this.props.dados.map((registro) => ({
					name: registro.tipo,
					y: registro.valor,
				})),
			},
		};
	};

	componentDidUpdate = () => this.initChild();

	render() {
		return (
			<div>
				<PieChart highcharts={Highcharts} options={this.state} />
			</div>
		);
	}
}

export default PieChartGastos;
