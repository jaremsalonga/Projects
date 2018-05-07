const express = require('express');
const router = express.Router();
// respond with "hello world" when a GET request is made to the homepage
router.get('/human', function (req, res) {
  res.send('api is working')
})
//Return router
module.exports = router;