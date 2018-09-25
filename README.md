[![npm](https://img.shields.io/npm/v/risejs.svg)](https://npmjs.org/package/risejs) [![Build Status](https://travis-ci.org/RiseVision/rise-ts.svg?branch=master)](https://travis-ci.org/RiseVision/rise-ts) [![Coverage Status](https://coveralls.io/repos/github/RiseVision/rise-ts/badge.svg?branch=master)](https://coveralls.io/github/RiseVision/rise-ts?branch=master)

# RISE Javascript Library

A JavaScript API Wrapper for interacting with a [rise node](https://github.com/RiseVision/rise-node). The library works both in the browser and Node.js.

## Table of Contents

* [API Reference](#api-reference)
* [Installation](#installation)
    * [Package Manager](#package-manager)
    * [Browser](#browser)
* [Usage](#usage)
    * [Configuration](#configuration)
    * [Examples](#examples)
    * [Error Handling](#error-handling)
    * [TypeScript](#typescript)
    * [Advanced Usage](#advanced-usage)
* [Compatibility](#compatibility)
    * [Browser Support](#browser-support)
    * [Node support](#node-support)
* [Contributing](#contributing)
* [License](#license)


## API Reference

All available methods are available in the API reference at [https://risevision.github.io/rise-ts](https://risevision.github.io/rise-ts)

## Installation

### Package Manager

Install via your favorite package manager

```bash
npm install --save risejs
# or using yarn
yarn add risejs
```

Include in your javascript

```javascript
var rise = require('risejs').rise;
// or using es6
import { rise } from 'risejs'
```

### Browser

Include via the unpkg CDN in your html

```html
<script type="text/javascript" src="https://unpkg.com/risejs/dist/browser/index.js"></script>
```

`rise` is now globally available on the `window` object

```html
<script>
    rise.nodeAddress = 'http://example.com:5566';
    // ...
</script>
```

## Usage

### Configuration

Set the node address on the `RiseAPI` object (**note:** omit any trailing slashes to the url)

```javascript
rise.nodeAddress = 'http://localhost:5566';
```

To see other configuration options [refer to the API reference](https://risevision.github.io/rise-ts/interfaces/riseapi.html)

### Examples

All API method responses can be handled with either a callback or a Promise. For example, to get the chain status using callbacks

```javascript
rise.blocks.getStatus(function(err, res) {
    if (err) {
    return console.log('Error: ', err); // handle error
    }
    console.log(res); // { success: true, broadHash: "12aebd7b...
});
```

using Promises

```javascript
rise.blocks.getStatus()
    .then(function(res) {
        console.log(res); // { success: true, broadHash: "12aebd7b...
    })
    .catch(function(err) {
        console.log('Error: ', err); // handle error
    });
```

using async / await

```javascript
try {
    const res = await rise.blocks.getStatus()
    console.log(res) // { success: true, broadHash: "12aebd7b...
}
catch(err) {
    console.log('Error: ', err) // handle error
}
```

### Error Handling

If `rise.errorAsResponse` is set to `true` (the default), application errors will be returned as an object in the response

```json
{
    "success": false,
    "error": "Message"
}
```

So that handling errors is as follows

```javascript
rise.blocks.getStatus()
    .then(function(res) {
        if (!res.success) {
            return console.log('Application Error: ', res.error); // handle Application Error
        }
        console.log(res); // { success: true, broadHash: "12aebd7b...
    })
    .catch(function(err) {
        console.log('HTTP Error: ', err); // handle HTTP error
    });
```

### TypeScript

Our Libraries are written in typescript so that you can use types in your applications

```TypeScript
import { rise, BlockStatusResponse } from 'risejs';

function handleStatus(err: Error, status: BlockStatusResponse) {
    console.log(status);
};
rise.blocks.getStatus(handleStatus);
```

All available types are available in the API reference as well at [http://risevision.github.io/rise-ts](http://risevision.github.io/rise-ts)

### Advanced Usage

Additional `APIWrapper` objects can be made using the `newWrapper` method

```javascript
var node1 = rise.newWrapper('http://node1:1234');
var node2 = rise.newWrapper('http://node2:1234', { timeout: 5000 });
```

## Compatibility

### Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

### Node support

Node >= 4.x is fully supported :)

## Contributing

Read the [Contributing Guide](CONTRIBUTING.md) for guidelines as well as local development instructions. And thank you to all of our [contributors](https://github.com/RiseVision/rise-ts/graphs/contributors).

## Discussion

Feel free to join the [Slack](https://slack.rise.vision)!

## License

[MIT](LICENSE)
