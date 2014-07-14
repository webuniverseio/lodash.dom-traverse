module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-explainjs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        explainjs: {
            dist: {
                options: {
                    showFilename: false // default is false
                },
                files: [{
                    src: ['./lodash.dom-traverse.js'],
                    dest: './explain.html'
                }]
            }
        },
        uglify: {
            min: {
                files: {
                    'lodash.dom-traverse.min.js': 'lodash.dom-traverse.js'
                }
            }
        }
    });
    grunt.registerTask('default', ['explainjs', 'uglify']);
};