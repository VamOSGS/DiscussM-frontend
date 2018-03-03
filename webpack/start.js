const path = require('path');

exports.PATHS = {
    SRC: path.resolve('src'),
    // DIST: path.resolve('../backend/static'),
    DIST: path.resolve('public'),
    APP: path.resolve('src/index'),
    TEMPLATE: path.resolve('webpack/template.html'),
    POSTCSS: path.resolve('postcss.config.js'),
};

exports.PORT = 1337;
