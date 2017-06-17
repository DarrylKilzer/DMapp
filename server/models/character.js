import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	health: {type: String, required: true },
	// Relations
	encounterId: { type: ObjectId, ref: models.encounter.name, required: true}
});

module.exports = mongoose.model(models.character.name, schema);