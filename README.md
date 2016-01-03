# Trello-filter-enhancing
Unhide the filtering button from the menu of the board when no filtering is active

## Disclaimer
This is just a 10 minutes hack, so the code is too much heavy for the job it does and I'm not using proper
GreaseMonkey scripting. Use it at your own risk. Any contribution is more than welcome.

## How it works
I use a simple trick found 
[here](http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript) to remove
a hide class from the element I want to be visible. However, since the element gets updated on certain action I
have to repeat the process over and over (once each second) using `setInterval`.

## Installation
Create a new user script with GreaseMonkey and paste the content of `Trello-filter-enhancing.user.js`.
