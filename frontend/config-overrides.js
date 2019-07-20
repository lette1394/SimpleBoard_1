const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

const { theme } = require('./config/antd/theme');

const overrideJestConfig = () => config => {
    // if (!config.testPathIgnorePatterns) {
    //     config.testPathIgnorePatterns = [];
    // }
    // if (!process.env.RUN_COMPONENT_TESTS) {
    //     config.testPathIgnorePatterns.push('<rootDir>/src/components/**/*.test.js');
    // }
    // if (!process.env.RUN_REDUCER_TESTS) {
    //     config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    // }
    if (!config.jest) {
        config.jest = {};
    }
    config.jest.testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|tsx|ts)?$";
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    })
    // overrideJestConfig()
);

