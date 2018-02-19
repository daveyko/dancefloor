const router = require('express').Router()
const fs = require('fs')
const Promise = require('bluebird')
const readDir = Promise.promisify(fs.readdir)
const path = require('path')
const urlParse = require('url').parse;
module.exports = router


router.get('/:songName', (req, res, next) => {
  console.log('here!')
  res.send(path.join(__dirname, '..', '..', 'public', 'songs', req.params.songName))
})

router.get('/', (req, res, next) => {
  console.log('here!')
  return readDir(path.join(__dirname, '..', '..', 'public', 'songs'))
    .then(songs => {
      console.log('songs!', songs)
      res.json(songs)
    })
    .catch(next)
})

