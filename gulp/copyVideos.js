'use strict';

import path from 'path';

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(dirs.assets, dirs.videos.replace(/^_/, ''));
  dest = path.join(taskTarget, dest);

  // Copy Videos
  gulp.task('copyVideos', () => {
    return gulp.src(path.join(dirs.source, dirs.videos, '**/*.*'))
      .pipe(gulp.dest(dest))
  });
}
