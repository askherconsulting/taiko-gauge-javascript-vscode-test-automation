/*jshint esversion: 8 */
var _selectors = require('./selectors');
var assert = require('assert');

const {
    textBox,near,toRightOf
} = require('taiko');

step("Select <value> of Text Box near <table>", async function(value, table) {
    var element = _selectors.getElement(table);
    assert.ok((await element.exists()));
    await textBox(near(element, {offset: 50})).select("‪हिन्दी‬");
});

step("Select <value> of Text Box to right of <table>", async function(value, table) {
    var element = _selectors.getElement(table);
    assert.ok((await element.exists()));
    await textBox(toRightOf(element)).select("‪हिन्दी‬");
});