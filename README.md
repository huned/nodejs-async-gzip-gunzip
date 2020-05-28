# Async Gzip and Gunzip for Node.js

Main repo: [https://github.com/huned/nodejs-async-gzip-gunzip](https://github.com/huned/nodejs-async-gzip-gunzip)

Uncomplicated async gzip and gunzip functions for node.js.

## Overview

Features:

* uncomplicated
* no dependencies or bloat
* familiar interface

## Install

    npm install async-gzip-gunzip

## Usage

    const asyncGunzip = require('async-gzip-gunzip').asyncGunzip
    const gunzipped = await asyncGunzip(gzippedBuffer)

    const asyncGzip = require('async-gzip-gunzip').asyncGzip
    const gzipped = await asyncGzip(gunzippedBuffer)

## Author

[Huned Botee](https://github.com/huned)

## License

MIT
