const router = require('express').Router();

// router.use('/users', require('./users'));
// router.use('/organizations', require('./organizations'));
// router.use('/test', require('./test'));
router.use(function(req, res, next){
  const err = new Error('Route doesn\'t exist!');
  err.status= 404;
  console.log('err.message in index', err.message)
  next(err)
})

module.exports = router;
