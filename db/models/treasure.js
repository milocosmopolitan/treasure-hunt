'use strict';

const Sequelize = require('sequeize');
const db = require('APP/db');

const Treasure = db.define('treasures', {
	name: Sequelize.STRING,
	latitude: Sequelize.DECIMAL,
	longitude: Sequelize.DECIMAL
});

module.exports = Treasure;