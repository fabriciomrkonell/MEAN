'use strict';

var User = require('./../models/user.js');

module.exports = function(app) {

	// GetAll
	app.get('/user', function(req, res) {
		User.find(function(err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
	});

	// GetById
	app.get('/user/:_id', function(req, res) {
		User.find({
			_id : req.params._id,
		}, function(err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data.shift());
		});
	});

	// Create
	app.post('/user', function(req, res) {
		User.create({
			name : req.body.name,
		}, function(err, data) {
			if (err) {
				res.json({ 'result': false });
			}
			res.json({ 'result': true });
		});
	});

	// Delete
	app.delete('/user/:_id', function(req, res) {
		User.remove({
			_id : req.params._id
		}, function(err, data) {
			if (err) {
				res.json({ 'result': false });
			}
			res.json({ 'result': true });
		});
	});

};