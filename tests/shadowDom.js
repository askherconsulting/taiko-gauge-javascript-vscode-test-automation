/*jshint esversion: 8 */

var _selectors = require('./selectors');
const assert = require('assert');
const {
    write,
    into, 
    press,
    textBox,
    text
} = require('taiko');

step("Verify shadow DOM can be accessed", async () =>{
   
// A recent change to Taiko.  See https://github.com/getgauge/taiko/commit/7229d2f603ae95257edd9c72a1027dacb81132d0
 
    assert.ok(await text("Let's have some different text!").exists(), "The shadow dom text was not found");
  
});



