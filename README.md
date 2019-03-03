# adopt-a-cell-react <!-- omit in toc -->
A React web app for UMN SVP Adopt-a-Cell

## Table of Contents <!-- omit in toc -->
- [Purpose](#purpose)
- [To Do](#to-do)
  - [Stretch Goals](#stretch-goals)
- [Development Installation](#development-installation)
- [Cell Detail](#cell-detail)

## Purpose
The adopt-a-cell web app is a small web application for registering and displaying information on who has donated to adopt a solar panel cell for the University of Minnesota Solar Vehicle Project.

## To Do
- [x] Figure out how to make cell grids of arbitrary sizes (future proofing).
- [x] Create the cell layout to match E2.
- [ ] Feed all default cell info top-down from the main Array object to each Cell object.
- [ ] Fix detail display of Cell objects. (See Cell Detail below)
- [ ] Grab patron info for display.
- [ ] Draw and incorperate vector graphic representing a top-down view of E2.
- [ ] Test full interactivity.
- [ ] Convert all map instances to arrays. (This will remove the need to have unique keys for )

### Stretch Goals
- [ ] Make app reactive to window size and resolution.
- [ ] Incorperate animations.
- [ ] Add touch/mobile support.

## Development Installation
1. Clone repository to your computer using:
   <br>
    ```
    git clone https://github.com/iAmSomeone2/adopt-a-cell-react.git
    ```
    <br>
2. CD into the new directory and run NPM install.
   <br>
   ```
   cd ./adopt-a-cell-react
   ```
   ```
   npm install
   ```
   <br>

## Cell Detail
<p>
    Currently, the app just enlarges the highlighted cell in order to show the provided information.
    The problem with this method is that when the cell resizes, it pushes the surrounding cells out of
    the way. This messes up the cell layout and makes the graphic look weird. 
</p>
<p>
    A possible solution to this is to use a dedicated Cell Detail object. The object would be a large cell that contains
    the adoptee information. Essentially it would perform the same function as the "hover" feature of the Cell object,
    but since it would be seperate it shouldn't push away the other objects. 
</p>
