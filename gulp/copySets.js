"use strict";

import path from "path";

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let dest = path.join(dirs.assets, dirs.sets.replace(/^_/, ""));
    dest = path.join(taskTarget, dest);

    // Copy sets
    gulp.task("copySets", () => {
        return gulp
            .src(path.join(dirs.source, dirs.sets, "**/*.*"))
            .pipe(gulp.dest(dest));
    });
}
