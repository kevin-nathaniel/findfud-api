const express = require('express');
const userController = require('../controller/user.js');
const router = express.Router();

// MEMBUAT DATA
router.post('/', userController.buatDataUser);

// AMBIL DATA
router.get('/', userController.getAllUsers);

// UPDATE DATA
router.patch('/:idUser', userController.updateDataUser);

// HAPUS
router.delete('/:idUser', userController.hapusDataUser);

module.exports = router;