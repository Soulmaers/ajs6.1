export default class Validator {
  static validateUsername(name) {
    const conditionOne = /^[a-z][\da-z_-]*[a-z]$/i.test(name);
    const conditionTwo = !(/\d{4,}/.test(name));
    if (conditionOne && conditionTwo) {
      return true;
    }
    return false;
  }
}
