# Javascript String Filters

Fast native javascript string filters library.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
   2. [Manually](#manually)
3. [Usage](#usage)
   1. [Camel case](#camel-case)
   2. [Capitalize](#capitalize)
   3. [Flat case](#flat-case)
   4. [Kebab case](#kebab-case)
   5. [Pad](#pad)
   6. [Pascal case](#pascal-case)
   7. [Snake case](#snake-case)
   8. [Title case](#title-case)
   9. [Train case](#train-case)
   10. [Truncate](#truncate)
4. [Author](#author)
5. [License](#license)

## Compatibility

Browser | Version
------- | -------
Chrome | >= 107
Edge | >= 107
Firefox | >= 104
Safari | >= 16

## Installation

### NPM

```bash
npm install string-filters
```

### Manually

[Download](https://github.com/tarkhov/js-string-filters/releases/download/v0.3.6/js-string-filters.zip) package and unpack it or use following commands:

```bash
wget https://github.com/tarkhov/js-string-filters/releases/download/v0.3.6/js-string-filters.zip
unzip js-string-filters.zip
```

## Usage

### Camel case

```js
import { camelCase } from 'string-filters'

let result = ''
result = camelCase('camel 123 case')
// Output: camelCase
console.log(result)

result = camelCase('camel 123 case', { numbers: true })
// Output: camel123Case
console.log(result)

result = camelCase('cameL 123 casE', { lower: true })
// Output: camelCase
console.log(result)

result = camelCase('cameL 123 casE', { numbers: true, lower: true })
// Output: camel123Case
console.log(result)
```

### Capitalize

```js
import { capitalize } from 'string-filters'

let result = ''
result = capitalize('capitalize')
// Output: Capitalize
console.log(result)

result = capitalize('cApitalizE', true)
// Output: Capitalize
console.log(result)
```

### Flat case

```js
import { flatCase } from 'string-filters'

let result = ''
result = flatCase('Flat 123 Case')
// Output: flatcase
console.log(result)

result = flatCase('Flat 123 Case', true)
// Output: flat123case
console.log(result)
```

### Kebab case

```js
import { kebabCase } from 'string-filters'

let result = ''
result = kebabCase('Kebab 123 Case')
// Output: kebab-case
console.log(result)

result = kebabCase('Kebab 123 Case', true)
// Output: kebab-123-case
console.log(result)
```

### Pad

```js
import { pad } from 'string-filters'

let result = ''
result = pad('pad', 10, '_')
// Output: ___pad____
console.log(result)
```

### Pascal case

```js
import { pascalCase } from 'string-filters'

let result = ''
result = pascalCase('pascal 123 case')
// Output: PascalCase
console.log(result)

result = pascalCase('pascal 123 case', { numbers: true })
// Output: Pascal123Case
console.log(result)

result = pascalCase('pascaL 123 casE', { lower: true })
// Output: PascalCase
console.log(result)

result = pascalCase('pascaL 123 casE', { numbers: true, lower: true })
// Output: Pascal123Case
console.log(result)
```

### Snake case

```js
import { snakeCase } from 'string-filters'

let result = ''
result = snakeCase('Snake 123 Case')
// Output: snake_case
console.log(result)

result = snakeCase('Snake 123 Case', true)
// Output: snake_123_case
console.log(result)
```

### Title case

```js
import { titleCase } from 'string-filters'

let result = ''
result = titleCase('title 123 case')
// Output: Title Case
console.log(result)

result = titleCase('title 123 case', { numbers: true })
// Output: Title 123 Case
console.log(result)

result = titleCase('titlE 123 casE', { lower: true })
// Output: Title Case
console.log(result)

result = titleCase('titlE 123 casE', { numbers: true, lower: true })
// Output: Title 123 Case
console.log(result)
```

### Train case

```js
import { trainCase } from 'string-filters'

let result = ''
result = trainCase('train 123 case')
// Output: Train-Case
console.log(result)

result = trainCase('train 123 case', { numbers: true })
// Output: Train-123-Case
console.log(result)

result = trainCase('traiN 123 casE', { lower: true })
// Output: Train-Case
console.log(result)

result = trainCase('traiN 123 casE', { numbers: true, lower: true })
// Output: Train-123-Case
console.log(result)
```

### Truncate

```js
import { truncate } from 'string-filters'

let result = truncate('etcetera', 3, '...')
// Output: etc...
console.log(result)
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.