module.exports = function(grunt) {
  
  grunt.initConfig({

  	// Configuração de Minificação - Origem/Destino  	
  	uglify: {
        'public/js/javascript.js': 'public/js/javascript.js'
     }

  });

  // Plugin de Minificação
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // Task de Minificação
  grunt.registerTask('minificar', ['uglify']);

};