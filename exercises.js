//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var inputNumber = num;
  var moveDecimalRight = inputNumber * 10;
  return moveDecimalRight;
  //code end
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var inputNumber = num;
  var reduceByFive = inputNumber - 5;
  return reduceByFive;
  //code end
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  var string1 = str1;
  var string2 = str2;
  var string1Length = string1.length;
  var string2Length = string2.length;
  if (string1Length === string2Length) {
    return true;
  }
  return false;
  //code end
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  var value_1 = x;
  var value_2 = y;
  if (value_1 == value_2) {
    return true;
  }
  return false;
  //code end
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  var checkNumber = num;
  if (checkNumber < 90) {
    return true;
  }
  return false;
  //code end
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  var checkNumber = num;
  if (checkNumber > 50) {
    return true;
  }
  return false;
  //code end
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var number1 = x;
  var number2 = y;
  var sumOfNumbers = number1 + number2;
  return sumOfNumbers;
  //code end
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var number1 = x;
  var number2 = y;
  var diffOfNumbers = number1 - number2;
  return diffOfNumbers;
  //code end
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var number1 = x;
  var number2 = y;
  var divOfNumber = number1 / number2;
  return divOfNumber;
  //code end
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var number1 = x;
  var number2 = y;
  var prodOfNumber = number1 * number2;
  return prodOfNumber;
  //code end
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var number1 = x;
  var number2 = y;
  var modOfNumbers = number1 % number2;
  return modOfNumbers;
  //code end
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  var evenCheck = num;
  var testValue = evenCheck % 2;
  if (testValue == 0){
    return true;
    }
  return false;
  //code end
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  var evenCheck = num;
  var testValue = evenCheck % 2;
  if (testValue == 0){
    return false;
    }
  return true;
  //code end
}

function square(num) {
  //square num and return the new value
  //code here
  var inputNumber = num;
  var exponentNeeded = 2;
  var squareOfNumber = Math.pow(inputNumber, exponentNeeded);
  return squareOfNumber;
  //code end
}

function cube(num) {
  //cube num and return the new value
  //code here
  var inputNumber = num;
  var exponentNeeded = 3;
  var cubeOfNumber = Math.pow(inputNumber, exponentNeeded);
  return cubeOfNumber;
  //code end
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var inputNumber = num;
  var exponentNeeded = exponent;
  var raiseToPower = Math.pow(inputNumber, exponentNeeded);
  return raiseToPower;
  //code end
}

function roundNumber(num) {
  //round num and return it
  //code here
  var inputNumber = num;
  var roundOffNumber = Math.round(inputNumber);
  return roundOffNumber;
  //code end
}

function roundUp(num) {
  //round num up and return it
  //code here
  var inputNumber = num;
  var roundUpNumber = Math.ceil(inputNumber);
  return roundUpNumber;
  //code end
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var getString = str;
  var punctuation = '!';
  var addPunctuation = getString + punctuation;
  return addPunctuation;
  //code end
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var firstNameEntered = firstName;
  var lastNameEntered = lastName;
  var combinedName = firstNameEntered + ' ' + lastNameEntered;
  return combinedName;
  //code end
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var inputName = name;
  var word1 = 'Hello ';
  var endPunctuation = '!';
  var greetingsFromHal = word1 + inputName + endPunctuation;
  return greetingsFromHal;
  //code end
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var rectLength = length;
  var rectWidth = width;
  var rectArea = rectLength * rectWidth;
  return rectArea;
  //code end
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangleBase = base;
  var triangleHeight = height;
  // 1/2(base * height)
  var triangleArea = 0.5*triangleBase*triangleHeight;
  return triangleArea;
  //code end
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circleRad = radius;
  // equation: area = pi*sqr(r)
  var circleArea = Math.PI * circleRad * circleRad;
  var circleAreaRounded = Math.round(circleArea);
  return circleAreaRounded;
  //code end
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var prismLength = length;
  var prismWidth = width;
  var prismHeight = height;
  // volume = w*l*h
  var prismVolume = prismWidth * prismLength * prismHeight;
  return prismVolume;
  //code end
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
