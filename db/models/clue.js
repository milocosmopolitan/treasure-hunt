'use strict';

const Sequelize = require('sequeize');
const db = require('APP/db');

const Clue = db.define('clues', {
	text: Sequelize.TEXT,
	type: Sequelize.ENUM('text', 'Q&A', 'game'),
	attribute: Sequelize.STRING
});

module.exports = Clue;