const moongose = require('mongoose');
const endOfMonth = require('date-fns/endOfMonth');
const startOfMonth = require('date-fns/startOfMonth');
const Gasto = moongose.model('gasto');

module.exports = (app) => {
	app.get('/api/gastos', (req, res) => {
		Gasto.find(
			{
				_user: '5f11c24f5464c14e8e4c1ae4',
				data: {
					$gte: startOfMonth(new Date()),
					$lte: endOfMonth(new Date()),
				},
				isRenda: false,
			},
			function (err, registros) {
				console.log(registros);
				res.send(registros);
			}
		);
	});

	app.put('/api/gastos', (req, res) => {
		const {
			tipo,
			descricao,
			valor,
			data,
			dataLancamento,
			isMensal,
			isRenda,
		} = req.body;
	});

	app.post('/api/gastos', (req, res) => {
		const { tipo, descricao, valor } = req.body;
		const user_id = '5f11c24f5464c14e8e4c1ae4';
		const gasto = new Gasto({
			tipo,
			descricao,
			valor,
			data,
			dataLancmento: Date.now(),
			isGasto,
			isRenda,
			_user: user_id,
		}).save();
		return res.json({ gasto });
	});
};
