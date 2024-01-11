const router = require("express").Router();
const { cosplay } = require("../controllers/cosplay");
const { phongcanh } = require("../controllers/phongcanh");
const { thinh } = require("../controllers/thinh");
const { vdanime } = require("../controllers/vdanime");
const { avtsang } = require("../controllers/avtsang");
const { home } = require("../controllers/home");

router.get("/cosplay", cosplay);
router.get("/phongcanh", phongcanh);
router.get("/thinh", thinh);
router.get("/vdanime", vdanime);
router.get("/avtsang", avtsang)
router.get("/", home);
module.exports = router;
