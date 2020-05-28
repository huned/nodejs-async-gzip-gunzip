const zlib = require('zlib')

const asyncGunzip = async buffer => {
  return new Promise((resolve, reject) => {
    zlib.gunzip(buffer, {}, (error, gunzipped) => {
      if (error) {
        reject(error)
      }
      resolve(gunzipped.toString())
    })
  })
}

module.exports = asyncGunzip
