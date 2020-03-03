'use strict';

import path from 'path';

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(dirs.assets, 'js', dirs.vendor.replace(/^_/, ''));
  dest = path.join(taskTarget, dest);

  // Copy Vendor
  gulp.task('copyVendor', () => {
    return gulp.src(path.join(dirs.source, dirs.vendor, '**/*.*'))
      .pipe(gulp.dest(dest))
  });
}
