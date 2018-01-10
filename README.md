<p align="center">
  <a href="https://mvs.org/">
    <img src="https://mvs.org/images/metaverselogo.png" alt="">
  </a>
  <br>
  <a href="https://travis-ci.org/canguruhh/metaverse-api-js">
     <img src="https://travis-ci.org/canguruhh/metaverse-api-js.png?branch=master" alt="Build status">
  </a>
  <a href='https://coveralls.io/github/canguruhh/metaverse-api-js?branch=master'><img src='https://coveralls.io/repos/github/canguruhh/metaverse-api-js/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>

  <br>
  API wrapper for the Metaverse full node wallet
</p>

## Installation
Install using npm:
``` bash
npm install metaverse-api-js
```

## Setup
### NodeJS
``` javascript
let Metaverse = require('metaverse-api-js');

let MVSD = new Metaverse.MVSD({host: '127.0.0.1', port: 8820, protocol: 'http'})

MVSD.getblockheader()
    .then(console.log)

```
<a href="https://nodei.co/npm/metaverse-api-js/"><img src="https://nodei.co/npm/metaverse-api-js.png?downloads=true&downloadRank=true&stars=true"></a>
### Browser
For use in webapps the npm package contains a dist/browser/mvsd.min.js. You can generate this file from source using grunt.

``` html
<html>
    <head>
        <script src="dist/browser/mvsd.min.js"></script>
        <script>
         var mvsd = new Metaverse.MVSD()
         mvsd.getblockheader()
         .then((response)=>{
             document.getElementById('target').innerHTML=JSON.stringify(response,null,4)
         })
        </script>
    </head>
    <body><div id="target"></div></body>
</html>
```
