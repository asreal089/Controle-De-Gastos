const mongoose = require('mongoose');
const { Schema } = mongoose;

const gastoSchema = new Schema({
	tipo: String,
	descricao: String,
	valor: Number,
	data: Date,
	dataLancamento: Date,
	isRenda: Boolean,
	_user: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('gasto', gastoSchema);
