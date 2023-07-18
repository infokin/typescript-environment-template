# TypeScript Environment Template

Template environment for TypeScript development. It contains a few files to quickly get a new TypeScript project started
and it has a basic [Grunt](https://gruntjs.com/) setup to build, watch (build continuously), clean and release the
project.

## Install

First, checkout the project with:

~~~bash
git clone https://github.com/clovergaze/typescript-environment-template
~~~

The Node package manager (npm) is used for management, so [Node](https://nodejs.org/) must be installed on the system
where you intend to use the project.

To install all necessary dependencies run

~~~bash
npm install
~~~

inside the projects root folder.

## Usage

All source files are located under _'./src'_, with the TypeScript files located under _'./src/scripts'_. After the
installation has finished, you can build the project and see what it does, or you can immediately start deleting and
changing the initial files to your liking.

## Development

For almost any development step, like the continuous build mode, testing and releasing, everything has to be built
first.

### Building

To build the project execute

~~~bash
npm run build
~~~

on the console.

This runs Grunts _build_ task (via its _default_ task), that lints and transpiles the sources, including source files
under _'./test'_. See the _scripts_ section in _package.json_ and the Grunt configuration in _Gruntfile.js_ for more
details.

#### Continuous build mode

After building everything at least once, you can use the continuous build mode by executing

~~~bash
npm run watch
~~~

at the console. This will continuously rebuild the sources, if anything changes. See the _watch_ task in _Gruntfile.js_
to find out which files trigger the build task.

### Testing

~~~bash
npm test
~~~

This executes test cases inside the _'./test'_ folder using [Mocha](http://mochajs.org/).

### Releasing

To build a release version of the project run:

~~~bash
npm run release
~~~

This will create a folder called _'./dist'_ with only the most necessary files to run the project.

### Cleaning

To remove all transpilation results, map files and leftover files, run:

~~~bash
npm run clean
~~~

This will also remove the _'./dist'_ folder.

## Bugs & Issues

Something is not working as expected? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/clovergaze/typescript-environment-template/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
