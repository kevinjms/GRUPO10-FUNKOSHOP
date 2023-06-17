const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../../controllers/api/apiUsersControllers');

router.get('/', apiUsersControllers.list);
router.get('/:id', apiUsersControllers.detail);

module.exports = router