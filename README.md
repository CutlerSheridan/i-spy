# I Spy

## Can you find the hidden objects?

Scour the images and see how fast you can find all the listed objects, then submit your score to the leaderboards.

#### TODO NEXT

- add another picture

#### TODO LATER

##### Features

- write function to add items to firebase
- add pictures to firebase cloud storage
- replace getImage with version that fetches image from firebase
- add ability to dismiss leaderboard

##### Behavior

- ? adjust getDropdownCoords() so dropdownWidth can be variable
  - might not be possible as DOM element would have to render before it could calculate this; is there a way to invisibly render DOM element then change it before display?
- ? add Start pop-up so you can choose when to start the timer

##### Style

- choose fonts
- style homescreen
- add credit

#### DONE

_0.4.7_

- adjust font and grid column size for header on mobile
- remove green line under game image

_0.4.6_

- swap higher res version of game image
- add more items to game1
- create functions for easier item creation

_0.4.5_

- fix rank suffixes
- test rank suffix func
- change ranks to skip to actual place instead of next number (1, 1, 3 instead of 1, 1, 2);
- fix winScreen on mobile portrait
- adjust spacing of rank / name / time
- make bottom of leaderboard list fade like top

_0.4.4_

- style loading screen
- add loading gif
- add min-/max- width and max height to winScreen
- adjust item box box-shadows

_0.4.3_

- style name input screen
- style leaderboard screen
- checker the leaderboard results
- space leaderboard results better
- style current user's result

_0.4.2_

- make strike in struck through item names not include the commas

_0.4.1_

- add media queries to item box box-shadow sizing

_0.4.0_

- make user input box autofocus
- make listed items able to display on same line
- style gameHeader
- add drop-shadow to gameHeader
- style selection dropdown
- adjust styling of found item boxes

_0.3.3_

- fix rank-checking algorithm to not start at 0
- get leaderboard to display once loaded
- add rank prop to score objects so players with same time will have same rank
- highlight current player's score on leaderboard
- make item names in gameHeader strike through when found

_0.3.2_

- allow user submission to db
- get leaderboard from db
- get rank from leaderboard

_0.3.1_

- implement item fetching from db

_0.3.0_

- make game header sticky
- add win screen
- add username prompt upon win
- add loading screen while leaderboards load
- display leaderboards screen once loaded

_0.2.4_

- dismiss selection + dropdown after guessing
- stop timer if all items found

_0.2.3_

- make correct guess display box around guessed item

_0.2.2_

- write logic to convert item's stored location bounds from % into ints
- write check to see if guess is within given item's bounds
- make selection appear/disappear when clicking on image/outside selection
- make dropdown selection execute guess
- change header item status if guess is correct
- add more practice items
- make dropdown menu only show unfound items
- only render dropdown menu if there's at least one unfound item

_0.2.1_

- expand getDropdownCoords to check which side of selection dropdown should go on

_0.2.0_

- add test image
- add Controller module for game logic
- add selection highlight that moves to wherever you click
- add dropdown of unfound characters
- on startup, fetch items into array and add isFound property

_0.1.1_

- move Timer to its own module
- start Firebase projec

_0.1.0_

- created router in App
- created Home, GamePage, GameHeader, GameImg
- created Timer functionality for timing game

_0.0.0_

- Initial commit
