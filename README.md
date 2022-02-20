# whop-javascript-sdk

## Installation
```
npm i whopapi
```
## Usage
```
var WhopApi = require('whopapi');

var whop = new WhopApi.Whop({bearer: "<Bearer Token>"});

console.log(whop.getLinks());
```