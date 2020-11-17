const moongose = require('mongoose');
const endOfMonth = require('date-fns/endOfMonth');
const { subMonths } = require('date-fns');
const startOfMonth = require('date-fns/startOfMonth');
const Gasto = moongose.model('gasto');
const objectId = moongose.Types.ObjectId;

module.exports = (app) => {
	app.get('/api/total_gasto/:mes', (req, res) => {
		const user_id = req.user.id;
		const mes_count = req.params.mes;
		Gasto.aggregate(
			[
				{
					$match: {
						data: {
							$gte: startOfMonth(subMonths(new Date(), mes_count)),
							$lte: endOfMonth(subMonths(new Date(), mes_count)),
						},
						isRenda: false,
						_user: objectId(user_id),
					},
				},
				{
					$group: {
						_id: '$tipo',
						totalAmount: { $sum: '$valor' },
					},
				},
			],

			function (err, registros) {
				res.send(registros);
			}
		);
	});

	app.get('/api/total_receita_gasto/:mes', (req, res) => {
		const user_id = req.user.id;
		const mes_count = req.params.mes;
		Gasto.aggregate(
			[
				{
					$match: {
						data: {
							$gte: startOfMonth(subMonths(new Date(), mes_count)),
							$lte: endOfMonth(subMonths(new Date(), mes_count)),
						},
						_user: objectId(user_id),
					},
				},
				{
					$group: {
						_id: '$isRenda',
						totalAmount: { $sum: '$valor' },
					},
				},
			],

			function (err, registros) {
				res.send(registros);
			}
		);
	});
};
