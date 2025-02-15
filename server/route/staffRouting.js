const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController")
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole("Staff"), staffController.addNewStaff);
router.get('/', staffController.getAllStaff);
router.get('/getAllStaffById', staffController.getAllStaffById);
router.delete('/',authRole("Staff"), staffController.deleteStaffById);
router.put('/:id',authRole("Staff"), staffController.updateStaffById);

module.exports = router;