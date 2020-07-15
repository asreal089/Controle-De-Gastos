const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	nome: String,
	email: String,
});

mongoose.model('user', userSchema);
