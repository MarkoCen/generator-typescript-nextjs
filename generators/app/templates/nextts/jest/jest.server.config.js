module.exports = {
    bail: 1,
    automock: false,

    rootDir: '../',
    preset: 'ts-jest',
    testEnvironment: 'node',

    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.server.json',
        },
    },

    testMatch: ['**/tests/server/**/?(*.)+(spec|test).ts?(x)'],
};
