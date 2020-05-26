console.log("inside index2.js");
export const a = 1;

export const testModule = function testModule() {
  function sum(a, b) {
    return a + b;
  }
  function difference(a, b) {
    return a - b;
  }
  return { sum, difference };
};
