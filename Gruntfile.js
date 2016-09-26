module.exports = function (grunt) {
  /**
   * Grunt設定
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * 変更監視
     */
    watch: {
      browserify: {
        files: ['client/*.jsx'],
        tasks: ['browserify']
      },
      options: {
        livereload: true
      }
    },
    /**
     * reactのビルド
     */
    browserify: {
      dist:{
        options: {
          transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
        src: ['client/*.jsx'],
        dest: 'public/javascripts/bundle.js',
      }
    },
    /**
     * 簡易サーバー
     */
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost'
        }
      }
    },
  });

  // プラグインのロード
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
}
