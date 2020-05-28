'use strict'

const fs = require('fs')
const assert = require('assert')
const asyncGzip = require('../').asyncGzip
const asyncGunzip = require('../').asyncGunzip

const TEST_STRING = 'gunzipped ok!\n'

describe('asyncGunzip', function () {
  it('gunzips correctly', async function () {
    const gzippedBuffer = fs.readFileSync('./test/data/test.gz')
    const gunzippedBuffer = await asyncGunzip(gzippedBuffer)
    assert.strictEqual(gunzippedBuffer.toString(), TEST_STRING)
  })
})

describe('asyncGzip', function () {
  it('gzips correctly', async function () {
    const gzippedBuffer = await asyncGzip(Buffer.from(TEST_STRING))
    const gunzippedBuffer = await asyncGunzip(gzippedBuffer)
    assert.strictEqual(gunzippedBuffer.toString(), TEST_STRING)
  })
})
