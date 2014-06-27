	var express = require('express'),
		
		// Novo aplicativo com express	
		app = express(),
		
		// Mongoose para o MongoDB
		mongoose = require('mongoose'),

		// Configuração da porta
		port = process.env.PORT || 8080,

		// Configuraçãos do Banco de Dados
		database = require('./config/database');

	// Conexão com o MongoDB	
	mongoose.connect(database.url);

	// Configurações
	app.configure(function() {

		// Diretório
		app.use(express.static(__dirname + '/public'));

		// Log do console
		app.use(express.logger('dev'));

		// Informações do POST
		app.use(express.bodyParser());

		// Simulador de DELETE e PUT
		app.use(express.methodOverride());
		
	});

	// Definição das rotas
	require('./app/routes.js')(app);

	// Início do Node
	app.listen(port);
	console.log("Aplicativo na porta: " + port);