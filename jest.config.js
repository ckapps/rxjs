module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '^.+\\.spec\\.ts$',
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  globals: {
    'ts-jest': {
      tsConfig: './src/tsconfig.spec.json',
    },
  },
};
