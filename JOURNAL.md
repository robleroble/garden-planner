# Garden Planner Journal

**7-4-2020**  
- I spent what seemed like forever figuring out how to create a repo and get everything all connected on my laptop (*note to self: use github more often so I know what I'm doing*)
- create-react-app'd myself an application. I'm planning on trying to use React for this project at the moment. We'll see how it will change in the future.

#### Key Elements Needed:
1. Form(s) to choose which plant you want, spacing, row length, etc.
2. Growing zone components that can be dragged and dropped
3. Default plant spacings for certain plants
4. Maybe I'll make my own pixel art for the graphics

#### Uncertainties:
1. How I will store the position and arrangement of the plants in the garden

#### Goals for tonight:
- Make a navbar/homepage idea (I'm thinking duolingo-theme colors, maybe lighter on the blue)
- Push to github, ya fool

#### Accomplished:
- got stuck on styling, but have an ugly home page
- got it to github!

---

**7-5-2020**

#### Goals for today:
- Make a navbar
- If time, work on homepage theme colors, SVG icon/logo

#### Accomplished:
- Made the navbar
- Started watching some videos on SVG icons

**7-6-2020**

#### Goals for today:
- Watch SVG videos
- Create a logo with svg
- Finish home page

#### Accomplished:
- Nothing

**7-7-2020**

#### Goals for today:
-Finish 'basic' homepage (no svg yet)
-Learn about SVG paths
-Start building garden designer page 
-- Garden with dimensions and ability to change dimensions

#### Accomplished:
- more or less finished the home page
- made a first version of the garden builder w/form and buttons (no functionality)

**I am going to scrap my current garden builder and go with a grid-pattern. I need to figure out how to make a grid without a nasty component*

**7-8-2020**

#### Goals for today:
- create garden builder that is a grid system
- create buttons that extend the garden grids one tile to the bottom or one tile to the right

#### Accomplished:
- made my grid system (should RM borders and make them inlaid to the div so they are 50px divs instead of 52px)
- added state and buttons that let you add rows and columns to garden
- Made a little shovel cursor when hovering over the grid

**7-9-2020**

#### Goals for today:
- add dimensions thingy for the grid
- fix grid borders (and fix other styling once changed... ugh)
- figure out how to store a crop in state in the grid
- play with react-selectable

#### Accomplished:
- added dimensions to grid
- set up IDs and keys corresponding to grid coordinates
- changed grid borders to be inlaid

**Not sure how I want to proceed with being able to select grid points. I'm struggling with figuring that out with react-selectable*

**7-12-2020**

#### Goals for today:
- create footer with buttons to: change dimensions, units/grid-pattern
- fix footer styling so it doesn't interfere with the plot
- incorporate redux and reducers to alter state
- add actions, action-types

#### Accomplished:
- made buttons footer thingy
- redux set up
- fixed the old footer styling

**7-13-2020**

#### Goals for today:
- add a minus row button

#### Accomplished: 
- added the minus button

*Too tired after work to focus much. I need to get a better understanding of actions before I use them. For now, I'll focus on setting up the dimensions button, and after that, I should probably start trying to figure out how to click and select grids.*

****

**7-14-2020**

#### Goals for today:
- Create a form for the set dimensions button

#### Accomplished:
- made the basic form for the dimensions

**7-15-2020**

#### Goals for today:
- create reducer func to set the dimensions
- hook it up to the form
- play around with storing grid cells in state

#### Accomplished:
- created SET_DIMENSIONS reducer func
- have it set up in the SetDimensionsForm

**7-16-2020**

#### Goals for today:
- created nested array storage to contain garden cells
- started making reducer funcs for the add col and row buttons

#### Accomplished:
- See the goals

*I'm going to have to work a lot with pure funcs. I'm still unsure how I'll be able to store and edit individial cell values. Filter?*

**7-17-2020**

#### Goals for today:
- Work on the reducer funcs

#### Accomplished:
- updated all of the reducer funcs.

*I'll need to update the set_dimensions reducer func in order for it to not edit the state of the other cells when they eventually have different crop values*

**7-18-2020**

#### Goals for today:
- play around with the idea of selecting cells (some form of state that adds cells based on key when they've been clicked?)

#### Accomplished:
- used state to toggle className variable

**7-19-2020**

#### Goals for today:
- Transfer useState from gardencell to the reducer

*reducer func will take the index position of the cell in the grid, as well as a crop name*
*maybe store the selected tiles in a temporary state?*
