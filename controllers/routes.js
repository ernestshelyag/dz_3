const express = require('express');
const router = express.Router();

const ctrlHome = require('./index');
const ctrlAbout = require('./about');
const ctrlContacts = require('./contacts');

router.get('/', ctrlHome.getIndex);
router.post('/', ctrlHome.sendIndex);

router.get('/about', ctrlAbout.getAbout);

router.get('/contacts', ctrlContacts.getContact);
router.post('/contacts', ctrlContacts.sendContact);

module.exports = router;
