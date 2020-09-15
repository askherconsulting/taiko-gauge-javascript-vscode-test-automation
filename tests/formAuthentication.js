/*jshint esversion: 8 */

var _selectors = require('./selectors');
const assert = require('assert');
const {
    write,
    click,
    into, 
    press,
    button,
    textBox,
    text
} = require('taiko');

step("Attempt login as <username> user with password <password> and see <message>", async (username, password, message) =>{
    await write(username, into(textBox({id: "username" })));
    await write(password, into(textBox({id: "password" }))); 
    await press('Enter');
    assert.ok(await text(message).exists(), "The expected message was not visible.  You may have been logged in incorrectly");

});

step("Complete login as <username> user with password <password> and see <message>", async (username, password, message) =>{
    await write(username, into(textBox({id: "username" })));
    await write(password, into(textBox({id: "password" }))); 
    await press('Enter');
    assert.ok(await text(message).exists(), "The expected message was not visible.  Login has failed");

});

step("Logout and see <logoutMessage>", async (logoutMessage) =>{
    await click("Logout");
    assert.ok(await text(logoutMessage).exists(), "The logout message was not visible. Logout has failed"); 
});