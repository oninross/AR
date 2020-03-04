'use strict';

import path from 'path';

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(dirs.assets, dirs.patterns.replace(/^_/, ''));
  dest = path.join(taskTarget, dest);

  // Copy patterns
  gulp.task('copyPatterns', () => {
    return gulp.src(path.join(dirs.source, dirs.patterns, '**/*.*'))
      .pipe(gulp.dest(dest))
  });
}
