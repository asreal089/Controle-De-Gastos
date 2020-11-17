import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PieChart from 'highcharts-react-official';
import Highcharts from 'highcharts';

const axios = require('axios');

class GraficoPizza extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalTipo: [],
		};
	}

	componentDidMount() {
		

		axios.get('api/total_gasto/'+this.props.month).then((res) => {
			const totalTipo = [];
			res.data.forEach((element) => {
				var temp = { name: element._id, y: element.totalAmount };
				totalTipo.push(temp);
			});
			this.setState({ totalTipo });
		});
	}

	render() {
		const HighchartsOptions = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
			},
			title: {
				text: 'Distribuição de gastos no mês',
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
			series: [
				{
					name: '% do gasto',
					colorByPoint: true,
					data: this.state.totalTipo,
				},
			],
		};

		return (
			<div className="ChartContainer">
				{this.state.totalTipo.length > 0 && (
					<PieChart
						highcharts={Highcharts}
						options={HighchartsOptions}
					/>
				)}
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(GraficoPizza);
