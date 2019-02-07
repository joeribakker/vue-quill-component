import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import vue from 'rollup-plugin-vue';

export default {
    input: 'src/wrapper.js',
    output: {
        name: 'VueQuill',
        exports: 'named',
        globals: {
            quill: 'Quill',
        },
    },
    plugins: [
        resolve(),
        commonjs(),
        vue({
            compileTemplate: true,
        }),
        buble(),
        uglify(),
    ],
    external: [
        'quill',
    ],
};