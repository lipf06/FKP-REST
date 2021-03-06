fs = require 'fs'
path = require 'path'
gulp = require 'gulp'
gutil = require 'gulp-util'
config = require '../configs/config.coffee'


module.exports = (gulp,$)->
    return ()->
        gulp.src config.dirs.src + '/fonts/**/*.*'
            # .pipe $.newer(config.fontsBuildPath)
            # .pipe($.plumber())
            # .pipe $.rimraf()
            .pipe $.size()
            .pipe gulp.dest(config.fontsBuildPath)
