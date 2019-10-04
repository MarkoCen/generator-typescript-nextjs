module.exports = {
    bail: 1,
    automock: false,

    rootDir: '../',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/jest/tsconfig.client.test.json',
        },
    },

    testMatch: ['**/tests/client/**/?(*.)+(spec|test).ts?(x)'],

    setupFilesAfterEnv: ['<rootDir>/jest/jest.client.setup.js'],
};
