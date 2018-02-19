const router = require('express').Router()
module.exports = router

router.use('/songs', require('./songs'))
router.use('/venues', require('./venues'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
