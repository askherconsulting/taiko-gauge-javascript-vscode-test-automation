#Browser Action

## Reload
* Navigate to "https://ahfarmer.github.io/calculator/"
* Click button "8"
* Reload the page
* assert text to be "0"
   |Type|Selector          |
   |----|------------------|
   |$   |.component-display|

## Reload should not clear local cache
* Navigate to "http://todomvc.com/examples/react/#/"
* Write "flow"
* Press "Enter"
* Reload the page
* Assert text "flow" exists on the page.