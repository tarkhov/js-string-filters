# Javascript String Filters

Fast native javascript string filters library.

### Contents

1. [Installation](#installation)
   1. [NPM](#npm)
   2. [Manually](#manually)
2. [Usage](#usage)
   1. [Camel case](#camel-case)
   2. [Capitalize](#capitalize)
   3. [Kebab case](#kebab-case)
   4. [Pad](#pad)
   5. [Replace words](#replace-words)
   6. [Snake case](#snake-case)
   7. [Split words](#split-words)
   8. [Truncate](#truncate)
3. [Author](#author)
4. [License](#license)

## Installation

### NPM

```bash
npm install string-filters
```

### Manually

[Download](https://github.com/tarkhov/js-string-filters/releases/download/v0.1.0/js-string-filters.zip) package and unpack it or use following commands:

```bash
wget https://github.com/tarkhov/js-string-filters/releases/download/v0.1.0/js-string-filters.zip
unzip js-string-filters.zip
```

## Usage

### Camel case

```js
import { camelCase } from 'string-filters'

// Output: camelCase
const output = camelCase('camel case')

// Output: CamelCase
const output = camelCase('camel case', true)

// Output: camel123Case
const output = camelCase('camel 123 case', false, true)

// Output: Camel123Case
const output = camelCase('camel 123 case', true, true)
```

### Capitalize

```js
import { capitalize } from 'string-filters'

// Output: CapitalizE
const output = capitalize('capitalizE')

// Output: Capitalize
const output = capitalize('cAPitaliZE', true)
```

### Kebab case

```js
import { kebabCase } from 'string-filters'

// Output: kebab-case
const output = kebabCase('kebab case')

// Output: kebab-123-case
const output = kebabCase('kebab 123 case', true)
```

### Pad

```js
import { pad } from 'string-filters'

// Output: ___pad____
const output = pad('pad', 10, '_')
```

### Replace words

```js
import { replaceWords } from 'string-filters'

// Output: Word1 Word2 Word3
const output = replaceWords('word1 word2 word3', true, capitalize)
```

### Snake case

```js
import { snakeCase } from 'string-filters'

// Output: snake_case
const output = snakeCase('snake case')

// Output: snake_123_case
const output = snakeCase('snake 123 case', true)
```

### Split words

```js
import { splitWords } from 'string-filters'

// Output: ['word1', 'word2', 'word3']
const output = splitWords('word1 123 word2 word3')

// Output: ['word1', '123', 'word2', 'word3']
const output = splitWords('word1 123 word2 word3', true)
```

### Truncate

```js
import { truncate } from 'string-filters'

// Output: trunc...
const output = truncate('truncate', 5, '...')
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.