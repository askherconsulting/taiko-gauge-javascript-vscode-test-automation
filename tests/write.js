/*jshint esversion: 8 */
var _selectors = require('./selectors');
var assert = require('assert');


const {
    write,focus, textBox, into, press
} = require('taiko');
var _selectors = require('./selectors');
const { link } = require('fs');

step("Write <text>", async function(text) {
	return write(text);
});

step("Focus <table>", async function(table) {
	return await focus(_selectors.getElement(table));
});

step('Search for Custom', async() => {
    const field = textBox({'placeholder': 'Search'});
    await write('Custom', into(field),{delay:100});
    assert.strictEqual(await field.value(), 'Custom');
    await press('Enter');
    
});