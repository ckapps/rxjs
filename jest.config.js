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
      tsconfig: './src/tsconfig.spec.json',
    },
  },
};
