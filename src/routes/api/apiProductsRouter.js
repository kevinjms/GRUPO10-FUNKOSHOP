const express = require('express');
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/apiProductsControllers');

router.get('/', apiProductsControllers.list);
router.get('/:id', apiProductsControllers.detail);

module.exports = router