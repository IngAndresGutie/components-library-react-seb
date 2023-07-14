'use strict';

const demoComponent = require('..');
const assert = require('assert').strict;

assert.strictEqual(demoComponent(), 'Hello from demoComponent');
console.info('demoComponent tests passed');
