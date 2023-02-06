# I Spy

## Can you find the hidden objects?

Scour the images and see how fast you can find all the listed objects, then submit your score to the leaderboards.

#### TODO NEXT

- dismiss dropdown after guessing

#### TODO LATER

##### Features

- make correct guess display box around guessed item
- make correct guess check if all items have been found

##### Behavior

- ? adjust getDropdownCoords() so dropdownWidth can be variable
- ? add Start pop-up so you can choose when to start the timer

##### Style

- add credit

#### DONE

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
