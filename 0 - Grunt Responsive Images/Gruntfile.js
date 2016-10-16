module.exports = function (grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: 480,
            quality: 50
          }, {
            name: 'medium',
            width: 720,
            quality: 50
          }, {
            name: 'large',
            width: 1440,
            quality: 60
          }, {
            name: 'xlarge',
            width: 2880,
            quality: 70
          }]
        },
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{gif,jpg,jpeg,png}'],
          dest: 'dist/images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};