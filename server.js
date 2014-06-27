'use strict';

	var express = require('express');				
	var app = express();		
	var mongoose = require('mongoose');
	var port = process.env.PORT || 8080;
	var database = require('./config/database');

	// Conexão com o MongoDB	
	mongoose.connect(database.url);
	
	// Configurações
	app.configure(function() {
		app.use(express.static(__dirname + '/public'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
	});

	// Definição das rotas
	require('./app/routes.js')(app);

	// Início do Node
	app.listen(port);
	console.log("Aplicativo na porta: " + port);