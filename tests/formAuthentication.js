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

step("Login as <username> user with password <password>", async (username, password) =>{
    await write(username, into(textBox({id: "username" })));
    await write(password, into(textBox({id: "password" }))); 
    await press('Enter');
    assert.ok(await text('Login Page').exists());
});