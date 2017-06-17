import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },	
	// Relations
	campaignId: { type: ObjectId, ref: models.campaign.name, required: true}
});

module.exports = mongoose.model(models.player.name, schema);