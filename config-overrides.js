const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirector: 'es',
        style: 'css',
    }),
    addLessLoader(),
);
