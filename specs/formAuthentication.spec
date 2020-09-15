
# Form Authentication

* Navigate to "https://the-internet.herokuapp.com/login" with timeout "10000" ms

## Login with invalid data

|username|password            |message                  |
|--------|--------------------|-------------------------|
|x       |y                   |Your username is invalid!|
|        |                    |Your username is invalid!|
|tomsmith|y                   |Your password is invalid!|
|tomsmith|supersecretpassword!|Your password is invalid!|


* Attempt login as <username> user with password <password> and see <message>

## Login with valid data

|username|password            |message                       |
|--------|--------------------|------------------------------|
|tomsmith|SuperSecretPassword!|You logged into a secure area!|

* Complete login as <username> user with password <password> and see <message>


## Logout

|username|password            |message                       |logoutMessage                     |
|--------|--------------------|------------------------------|----------------------------------|
|tomsmith|SuperSecretPassword!|You logged into a secure area!|You logged out of the secure area!|

* Complete login as <username> user with password <password> and see <message>
* Logout and see <logoutMessage>






