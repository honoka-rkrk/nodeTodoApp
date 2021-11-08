var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const todoTasks = [];
  const doneTasks = []

  res.render('index', {
    todoTasks, doneTasks,
  })
});

module.exports = router;
