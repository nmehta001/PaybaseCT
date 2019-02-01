const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/talks');

router.get('/', Ctrl.findAll);
router.post('/:id', Ctrl.update);

module.exports = router.routes();
