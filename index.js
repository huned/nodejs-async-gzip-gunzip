const zlib = require('zlib')

const asyncGzip = async buffer => {
  return new Promise((resolve, reject) => {
    zlib.gzip(buffer, {}, (error, gzipped) => {
      if (error) {
        reject(error)
      }
      resolve(gzipped)
    })
  })
}

const asyncGunzip = async buffer => {
  return new Promise((resolve, reject) => {
    zlib.gunzip(buffer, {}, (error, gunzipped) => {
      if (error) {
        reject(error)
      }
      resolve(gunzipped)
    })
  })
}

module.exports = {
  asyncGzip: asyncGzip,
  asyncGunzip: asyncGunzip
}
