const router = require('express').Router()
const fs = require('fs')
const Promise = require('bluebird')
const readDir = Promise.promisify(fs.readdir)
const path = require('path')
module.exports = router


router.get('/', (req, res, next) => {
  return readDir(path.join(__dirname, '..', '..', 'public', 'venues'))
    .then(venues => {
      venues = venues.map(venue => {
        return '/venues/' + venue
      })
      res.json(venues)
    })
    .catch(next)
})

