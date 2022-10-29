import fs from 'fs';
import path from 'path';
import { tsconfig, tsconfigBuild } from './tsconfig';
import { jestConfig } from './jest';
import { prettierConfig } from './prettier';
import { eslintRc } from './eslint';

export default {
  '.eslintignore': fs.readFileSync(path.resolve(__dirname, '../templates/.eslintignore'), 'utf8'),
  '.npmignore': fs.readFileSync(path.resolve(__dirname, '../templates/.npmignore'), 'utf8'),
  'tsconfig.json': { configuration: tsconfig, stringify: true },
  'tsconfig.build.json': { configuration: tsconfigBuild, stringify: true },
  'jest.config.js': { configuration: jestConfig },
  '.prettierrc.js': { configuration: prettierConfig },
  '.eslintrc.js': { configuration: eslintRc },
};