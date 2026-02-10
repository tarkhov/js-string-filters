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
   5. [Snake case](#snake-case)
   6. [Truncate](#truncate)
   7. [Words](#words)
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
import { camel } from 'string-filters'

// Output: camelCase
const output = camel('camel case')

// Output: CamelCase
const output = camel('camel case', true)

// Output: camel123Case
const output = camel('camel 123 case', false, true)

// Output: Camel123Case
const output = camel('camel 123 case', true, true)
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
import { kebab } from 'string-filters'

// Output: kebab-case
const output = kebab('kebab case')

// Output: kebab-123-case
const output = kebab('kebab 123 case', true)
```

### Pad

```js
import { pad } from 'string-filters'

// Output: ___pad____
const output = pad('pad', 10, '_')
```

### Snake case

```js
import { snake } from 'string-filters'

// Output: snake_case
const output = snake('snake case')

// Output: snake_123_case
const output = snake('snake 123 case', true)
```

### Truncate

```js
import { truncate } from 'string-filters'

// Output: trunc...
const output = truncate('truncate', 5, '...')
```

### Words

```js
import { words } from 'string-filters'

// Output: ['word1', 'word2', 'word3']
const output = words('word1 123 word2 word3')

// Output: ['word1', '123', 'word2', 'word3']
const output = words('word1 123 word2 word3', true)
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.