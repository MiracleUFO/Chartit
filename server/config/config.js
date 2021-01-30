var config = {};

config.mongoURI = {
  development: 'mongodb://localhost:27017/chartit',
  test: 'mongodb://localhost/chartit-test',
  production: process.env.MONGODB_URI
};

module.exports = config;
