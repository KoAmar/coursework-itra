const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/register", UserController.user_register);

router.get("/register/:activationID", UserController.user_confirm);

router.post("/login", UserController.user_login);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
