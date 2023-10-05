import dts from 'rollup-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';

import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    external: [...Object.keys(pkg.dependencies || {})],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
        exports: 'named'
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        exports: 'named'
      }
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      preserveDirectives({ supressPreserveModulesWarning: true })
    ],
    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    }
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    }
  }
];
