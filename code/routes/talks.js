const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/talks');

router.get('/talks', (req, res) => {
  res.send("Welcome to all talks");
});

// router.post('/:id', Ctrl.update);

module.exports = router;
