const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');

module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,
  // }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  // px转换rem
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 192,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
  }),])
);