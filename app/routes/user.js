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

	// Create
	app.post('/user', function(req, res) {
		User.create({
			name : req.body.text,
		}, function(err, data) {
			if (err) {
				res.send(err);
			}
			res.json({ 'result': 1 });
		});
	});

	// Delete
	app.delete('/user/:todo_id', function(req, res) {
		User.remove({
			_id : req.params.todo_id
		}, function(err, data) {
			if (err) {
				res.send(err);
			}
			res.json({ 'result': 1 });
		});
	});

};