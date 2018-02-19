const router = require('express').Router()
const fs = require('fs')
const Promise = require('bluebird')
const readDir = Promise.promisify(fs.readdir)
const path = require('path')
module.exports = router

//return the absolute path to specific song that user chooses
router.get('/:songName', (req, res, next) => {
  res.send(path.join(__dirname, '..', '..', 'public', 'songs', req.params.songName))
})

//return arr of all songs in public/songs dir
router.get('/', (req, res, next) => {
  return readDir(path.join(__dirname, '..', '..', 'public', 'songs'))
    .then(songs => {
      res.json(songs)
    })
    .catch(next)
})

