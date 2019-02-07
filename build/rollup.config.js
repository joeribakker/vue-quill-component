import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
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
        terser(),
    ],
    external: [
        'quill',
    ],
};