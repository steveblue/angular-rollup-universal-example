// rollup.config.universal.js

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const config = require('./ngr.config.js');
const external = Object.keys(pkg.dependencies || {});

export default {
    entry: './ngfactory/src/app/app.server.module.ngfactory.js',
    format: 'cjs',
    dest: './dist/backend/bundle.server.js',
    sourceMap: true,
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/rxjs/**'
        })
    ],
    external(id) {
        return id.indexOf('@angular') > -1;
    }
}
