'use strict';

module.exports = function (grunt) {

    // Lê os arquivos do diretório 'tasks'
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

	// Registra as Tasks
	grunt.registerTask('build', [ 'uglify' ]);  	
    
};