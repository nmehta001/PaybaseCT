/* routes/index.js */

module.exports = (router) => {
  router.prefix('/v1');
  router.use('/talks', require('./talks'));
};
