[![https://nodei.co/npm/@svantetic/metar.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@svantetic/metar.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@svantetic/metar)

## Description

Get metar from VATSIM for given ICAO airport code and display it in terminal.

For simulation use only!

You can use it as a CLI tool by installing it globally, or as a package in your project.

## Installation as a CLI tool

```
$ npm install -g @svantetic/metar
```

## Usage

```
$ metar epkt
```

## Example output

```
EPKT 141430Z 09010KT 060V140 CAVOK 21/02 Q1015
```

## Installation as a package

```
$ npm install @svantetic/metar
```


## Usage

```
const { getMetar } = require('@svantetic/metar/api')

getMetar('epkt').then((metar) => {
  // do stuff
});


// or

const epkt = await getMetar('epkt');
```

## Error handling

Package does not do additional validation or error handling. When there's no metar available or ICAO code is wrong, it returns empty string, just like VATSIM api.
