const express = require('express');

const router = express.Router();

const db = require('../model/usertable');

const usercontroller = require('../controller/controllers')


router.post('/add-user',usercontroller.postuser);


router.get('/getuser',usercontroller.getuser);


router.delete('/delete-user/:id',usercontroller.deleteuser)


router.put('/edit-user/:id',usercontroller.edituser)

module.exports = router;