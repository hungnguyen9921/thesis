const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify(
    'mongodb://thesis:lplsxlAykVxLYM3PUX46fowYontnyM48zUsPmQlmwBHKLlADmg3E7shh4mRn48dxb36jaiZRc61ZACDbUBONxA==@thesis.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@thesis@'
  ),
  'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
  'process.env.JWT_EXPIRES_IN': JSON.stringify('90d'),
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify(
      'mongodb://thesis:lplsxlAykVxLYM3PUX46fowYontnyM48zUsPmQlmwBHKLlADmg3E7shh4mRn48dxb36jaiZRc61ZACDbUBONxA==@thesis.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@thesis@'
    ),
    'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
    'process.env.JWT_EXPIRES_IN': JSON.stringify('90d'),
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify(
      'mongodb://thesis:lplsxlAykVxLYM3PUX46fowYontnyM48zUsPmQlmwBHKLlADmg3E7shh4mRn48dxb36jaiZRc61ZACDbUBONxA==@thesis.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@thesis@'
    ),
    'process.env.JWT_SECRET': JSON.stringify('HUNGJWT123'),
    'process.env.JWT_EXPIRES_IN': JSON.stringify('90d'),
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.cjs',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'ignore-loader',
      },
    ],
  },
  target: 'node',
  plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)],
};
