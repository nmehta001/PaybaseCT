const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/talks');

router.get("/talks", Ctrl.findTalks);
router.get("/talks/:id", Ctrl.findTalk());

module.exports = router.routes();
