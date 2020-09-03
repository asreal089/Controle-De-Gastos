const moongose = require('mongoose');
const endOfMonth = require('date-fns/endOfMonth');
const startOfMonth = require('date-fns/startOfMonth');
const Gasto = moongose.model('gasto');
const objectId = moongose.Types.ObjectId;

module.exports = (app) => {
	app.get('/api/total_gasto', (req, res) => {
		const user_id = req.user.id;
		Gasto.aggregate(
			[
				{
					$match: {
						data: {
							$gte: startOfMonth(new Date()),
							$lte: endOfMonth(new Date()),
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
};
