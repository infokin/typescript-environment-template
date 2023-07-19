"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    exec: {
      eslint: "eslint --ext .js,*.ts . src/**/*.ts test/**/*.ts",
      typescript: "tsc"
    },
    copy: {
      default: {
        expand: true,
        cwd: "src",
        src: [
          "index.html",
          "template.min.js"
        ],
        dest: "dist/"
      }
    },
    uglify: {
      default: {
        files: {
          "src/template.min.js": [
            "src/scripts/Abstract.js",
            "src/scripts/Template.js"
          ]
        }
      }
    },
    clean: {
      development: {
        src: [
          "src/template.min.js",
          "src/**/*.js*",
          "test/**/*.js*"
        ]
      },
      release: {
        src: [
          "dist"
        ]
      },
      other: {
        src: [
          ".tscache"
        ]
      }
    },
    watch: {
      config: {
        files: [
          "Gruntfile.js"
        ],
        options: {
          reload: true
        }
      },
      default: {
        files: [
          ".eslintrc.js",
          ".eslintignore",
          "tsconfig.json",
          "src/**/*.ts",
          "test/**/*.ts"
        ],
        tasks: [
          "build"
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", [
    "build"
  ]);

  grunt.registerTask("build", [
    "exec:eslint",
    "clean:development",
    "exec:typescript",
    "uglify"
  ]);

  grunt.registerTask("release", [
    "clean:release",
    "copy"
  ]);

  grunt.registerTask("clean-development", [
    "clean:development",
    "clean:other"
  ]);

  grunt.registerTask("clean-release", [
    "clean:release"
  ]);
};
