const ctrl = require('../controllers/contact');
const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();

router.get('/', ctrl.list);

router.post('/',
  // isAdmin,
  bodyParser.json(),
  ctrl.create,
);

router.get('/:id', ctrl.delete);

router.delete('/:id', ctrl.delete);

module.exports = router;
