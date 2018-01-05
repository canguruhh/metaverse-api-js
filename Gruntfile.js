module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            main: {
                src: './src/index.ts',
                dest: './dist/browser/mvsd.js'
            },
            options: {
                browserifyOptions: {
                    debug: false,
                    standalone: 'Metaverse'
                },
                configure: function (bundler) {
                    bundler.plugin(require('tsify'));
                    bundler.transform(require('babelify'), {
                        presets: ['env'],
                        extensions: ['.ts']
                    });
                }
            }
        },
        uglify: {
            js: {
                src: ['./dist/browser/mvsd.js'],
                dest: './dist/browser/mvsd.min.js',
                options: {
                    mangle: {
                        reserved: ['Metaverse','MVSD']
                    }
                }
            }
        },
        typescriptUsingTsConfig: {
            basic: {
                options: {
                    rootDir: "./" // optional 
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript-using-tsconfig');

    grunt.registerTask('default', ['node','browser']);
    grunt.registerTask('browser', ['browserify', 'uglify']);
    grunt.registerTask('node', ['typescriptUsingTsConfig']);

};
