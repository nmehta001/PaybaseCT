const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/talks');

router.get("/talks", Ctrl.findTalks);

module.exports = router.routes();
