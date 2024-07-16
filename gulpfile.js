import gulp from 'gulp';

export const copy = () => {
    return gulp.src([
        'src/*.css',
        'src/*.html',
        '!src/test.html'
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'))
};
