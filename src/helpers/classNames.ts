/**
 * @description A function that takes an array of strings and returns a string of space separated class names.
 * @param {string[]} classes An array of strings.
 * @returns {string} A string of space separated class names.
 */
export const classNames = (classes: string[]): string => {
  return classes.join(' ');
};
