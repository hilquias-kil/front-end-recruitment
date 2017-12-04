// rollup.config.js
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
    //uglify()
  ]
};