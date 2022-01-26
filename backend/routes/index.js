const express = require("express");
const router = express.Router();

const userRoute = require("./users");

router.use("/api/v1/users", userRoute);

module.exports = router;
