# TypeScript Environment Template

Template environment for TypeScript development. It contains a simple setup for quickly getting started with a new
TypeScript project using [Grunt](https://gruntjs.com/) to build, watch (build continuously), clean and release the
project.

## Install

First, make sure you have [Node](https://nodejs.org/) installed on your system. Then, checkout the project with:

```bash
git clone https://github.com/clovergaze/typescript-environment-template
```

Next, change into the projects root folder and install all necessary dependencies with:

```bash
npm install
```

## Usage

After installing all dependencies, you can start using the project. See the following sections for more details.

### Building

To build the project run:

```bash
npm run build
```

This will run Grunt's `build` pipeline (via its `default` task), that lints and transpiles the sources, including files
found under `./test`. See the `scripts` section in `package.json` and the Grunt configuration in `Gruntfile.js` for more
details.

### Watch / Continuous Build Mode

You can also use a continuous build mode for development, if you have built the project at least once using the `build`
task. This will continuously rebuild the sources, if anything changes.

To start the continuous build mode, run:

```bash
npm run watch
```

Have a look at the `watch` task in `Gruntfile.js` for more detailed information.

### Testing

Run tests with:

```bash
npm test
```

This executes test cases inside the `'./test'` folder using [Mocha](http://mochajs.org/).

### Releasing

To build a release version of the project run:

```bash
npm run release
```

This will create a folder called `'./dist'` that will contain only the necessary files in to to run the project.

### Cleaning

Tor remove all leftover files from the build process, run:

```bash
npm run clean
```

Cleaning will also include the removal of the `'./dist'` folder.

## Bugs & Issues

If you encounter any issues or bugs, we would appreciate it if you could report them on
the [corresponding GitHub page](https://github.com/clovergaze/typescript-environment-template/issues). Thank you for
your help in improving this project.

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
