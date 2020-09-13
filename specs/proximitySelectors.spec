# Proximity Selectors
## Below

* Intercept Google Analytics
* Navigate to "https://gauge.org"
* Click link "Privacy" below 

   |Type|Selector      |
   |----|--------------|
   |link|Gauge Commands|

## Above

* Intercept Google Analytics
* Navigate to "https://gauge.org"
* Click link "Blog"
* Click image above 

   |Type|Selector                                                     |
   |----|-------------------------------------------------------------|
   |text|Introducing Taiko - the last mile to reliable test automation|
* Assert Exists 

   |Type    |Selector          |Method|
   |--------|------------------|------|
   |text    |Introducing Taiko |exists|

## Right Of

* Intercept Google Analytics
* Navigate to "https://gauge.org/index.html"
* Assert Exists

   |Type|Selector    |Method|
   |----|------------|------|
   |$   |.github_star|exists|
* Click link to right of

   |Type|Selector    |
   |----|------------|
   |$   |.github_star|

* Assert title to be "Supported Plugins | Gauge" 