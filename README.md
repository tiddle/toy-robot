# Carlo Cruz's Toy Robot

Please `npm i` to install all dependencies.

`index.js` just runs the different robot scenarios, which are located in the `scenarios` folder.

Robots 1 to 3 are the given examples in the PDF. Robot 4 is a robot with a few invalid commands that either don't exist, are executed before placement or try to move the robot off the table.

I don't normally include the `dist` folder, but incase something weird happens, just execute `node ./dist/dist.js`

If you're wondering why I did things a certain way, and not another, it's because I thought it best to do it that way at the time. This hasn't gone through a code review, so it definitely has the potential to be improved and I'm happy to change my code in a real life scenario.

## External Dependecies

-   Webpack
    -   This probably was overkill for this tiny project and by the time I realised that all I really needed was Babel, it was already implemented. I'm ok with this as most of what I do is in the web space.
-   Babel
    -   Used to transpile ES6 to be usable in node CLI

## Available Commands:

-   `npm start`
    -   Compiles src files and executes `index.js`
-   `npm test`
    -   Executes the jest unit tests
-   `npm test-w`
    -   Executes the jest unit tests in watch mode
h
## Assumptions

-   Jest installed globally `npm i -g jest`
-   Table coords will only be in positive
-   User has a somewhat recent version of node, was written in `v9.2.0`
