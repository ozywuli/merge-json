var merge = require('gulp-merge-json');

gulp.src('src/data/*.json')
    .pipe(merge({
        startObj: { someKey: 'defaultValue' },
    }))
    .pipe(gulp.dest('./dist'));