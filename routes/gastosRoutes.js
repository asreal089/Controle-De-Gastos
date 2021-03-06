const moongose = require('mongoose');
const { format, subMonths } = require('date-fns');
const endOfMonth = require('date-fns/endOfMonth');
const startOfMonth = require('date-fns/startOfMonth');
const Gasto = moongose.model('gasto');

module.exports = (app) => {
	app.get('/api/gasto/:id', (req, res) => {
		const user_id = req.user.id;
		const gasto_id = req.params.id;
		Gasto.findOne(
			{
				_user: user_id,
				_id: gasto_id,
			},
			function (err, registro) {
				res.send(registro);
			}
		);
	});

	app.get('/api/gastos/:mes', (req, res) => {
		const user_id = req.user.id;
		const mes_count = req.params.mes;
		Gasto.find(
			{
				_user: user_id,
				data: {
					$gte: format(
						startOfMonth(subMonths(new Date(), mes_count)),
						'yyyy-MM-dd'
					),
					$lte: endOfMonth(subMonths(new Date(), mes_count)),
				},
				isRenda: false,
			},
			function (err, registros) {
				res.send(registros);
			}
		);
	});

	app.get('/api/renda/:mes', (req, res) => {
		const user_id = req.user.id;
		const mes_count = req.params.mes;
		Gasto.find(
			{
				_user: user_id,
				data: {
					$gte: format(
						startOfMonth(subMonths(new Date(), mes_count)),
						'yyyy-MM-dd'
					),
					$lte: endOfMonth(subMonths(new Date(), mes_count)),
				},
				isRenda: true,
			},
			function (err, registros) {
				res.send(registros);
			}
		);
	});

	app.put('/api/gastos', (req, res) => {
		const {
			id,
			tipo,
			descricao,
			valor,
			data,
			dataLancamento,
			isRenda,
		} = req.body;
		Gasto.findByIdAndUpdate(
			{ _id: id },
			{
				tipo,
				descricao,
				valor,
				data,
				dataLancamento,
				isRenda,
			},
			function (err, reg) {
				res.send(reg);
			}
		);
	});

	app.delete('/api/gastos', (req, res) => {
		Gasto.findOneAndDelete({ _id: req.body._id }, function (err, res) {});
		res.send(req.body._id);
	});

	app.post('/api/gastos', (req, res) => {
		const { tipo, descricao, valor, data, isMensal, isRenda } = req.body;
		const user_id = req.user.id;
		const gasto = new Gasto({
			tipo,
			descricao,
			valor,
			data,
			dataLancamento: Date.now(),
			isMensal,
			isRenda,
			_user: user_id,
		}).save();
		return res.json({ gasto });
	});
};
