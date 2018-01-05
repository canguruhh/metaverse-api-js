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
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: './dist/result.txt',
                    quiet: false,
		                timeout: 10000,
                    clearRequireCache: false,
                    noFail: false
                },
                src: ['./test/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-typescript-using-tsconfig');

    grunt.registerTask('default', ['node','browser','test']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('browser', ['browserify', 'uglify']);
    grunt.registerTask('node', ['typescriptUsingTsConfig']);

};
