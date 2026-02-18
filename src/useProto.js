import camelCase from './camelCase'
import capitalize from './capitalize'
import flatCase from './flatCase'
import kebabCase from './kebabCase'
import pad from './pad'
import pascalCase from './pascalCase'
import snakeCase from './snakeCase'
import titleCase from './titleCase'
import trainCase from './trainCase'
import truncate from './truncate'

export default function () {
  String.prototype.camelCase = function (options) {
    return camelCase(this, options)
  }
  String.prototype.capitalize = function (lower) {
    return capitalize(this, lower)
  }
  String.prototype.flatCase = function (numbers) {
    return flatCase(this, numbers)
  }
  String.prototype.kebabCase = function (numbers) {
    return kebabCase(this, numbers)
  }
  String.prototype.pad = function (length, chars) {
    return pad(this, length, chars)
  }
  String.prototype.pascalCase = function (options) {
    return pascalCase(this, options)
  }
  String.prototype.snakeCase = function (numbers) {
    return snakeCase(this, numbers)
  }
  String.prototype.titleCase = function (lower) {
    return titleCase(this, lower)
  }
  String.prototype.trainCase = function (options) {
    return trainCase(this, options)
  }
  String.prototype.truncate = function (length, omission) {
    return truncate(this, length, omission)
  }
}