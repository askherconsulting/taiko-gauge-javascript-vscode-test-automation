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

step("Login as <user> user with password <password>", async (user1, password1) =>{
    await write(user1, into(textBox({id: "username" })));
    await write(password1, into(textBox({id: "password" }))); 
    await press('Enter');
    assert.ok(await text('Login Page').exists());
});