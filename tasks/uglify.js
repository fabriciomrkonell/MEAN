'use strict';

module.exports = function uglify(grunt) {

	// Plugin de Minificação
	grunt.loadNpmTasks('grunt-contrib-uglify')

	// Configuração de Minificação - Destino/Origem
  	return {
    	target: {
      		files: {
        		'./public/js/app.min.js': ['./public/js/app.js']
      		}
   		}
  	};

};