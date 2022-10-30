import config from './src';

// During the initial creation of tsconfig. sythentic default imports are not allowed.
// So we can handle both
const tsconfig = config['tsconfig.json'] || (config as any).default['tsconfig.json'];

tsconfig.configuration.compilerOptions.target = 'ES2019';

export default config;
