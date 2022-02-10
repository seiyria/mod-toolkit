
const path = require('path');

module.exports = {
  pluginOptions: {
   electronBuilder: {
     preload: 'src/preload.js',

     appId: 'modding.rair.land',
     win: {
      target: [
        'nsis'
      ],
      icon: './public/favicon.ico',
      requestedExecutionLevel: 'requireAdministrator'
     },

     builderOptions: {
       publish: []
     },

     chainWebpackMainProcess(config) {

        config.module
          .rule('node')
          .test(/\.node$/)
          .use('native-ext-loader')
          .loader('native-ext-loader')
          .options(
            process.env.NODE_ENV === 'development'
              ? {
                rewritePath: path.resolve(__dirname, 'native'),
              }
              : {}
          );
     }
   }
  }
 };