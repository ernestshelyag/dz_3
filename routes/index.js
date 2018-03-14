const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index');
const ctrlAbout = require('../controllers/about');
const ctrlContacts = require('../controllers/contacts');

router.get('/', ctrlHome.getIndex);
router.post('/', ctrlHome.sendData);

router.get('/about', ctrlAbout.getAbout);
router.get('/contacts', ctrlContacts.getContact);

module.exports = router;
