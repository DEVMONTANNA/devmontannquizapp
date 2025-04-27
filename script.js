// let number = prompt("Enter a number");
// if (number % 2 === 0) {
//   console.log(`${number} is Even`);
// } else {
//   console.log(`${number} is odd`);
// }
// let age = prompt("Enter your age");
// if (age >= 18) {
//   console.log("You are eligible to get a drivers liscense ");
// } else {
//   console.log("You are not elihgible to get a drivers liscense");
// }

// let monthlySalary = prompt("Input your monthly salary");
// let annualSalary = monthlySalary * 12;
// let annualBonusChecker = (annualSalary / 100) * 20;
// let annualSalaryannum = annualSalary + annualBonusChecker;
// console.log(`  your CTC annum pay is ${annualSalaryannum}`);

// let color1 = "red";
// let color2 = "green";
// let color3 = "yellow";

// let colorInput = prompt("Input a color");
// if (colorInput == color1) {
//   console.log("STOP");
// } else if (colorInput == color2) {
//   console.log("GO");
// } else {
//   console.log("WAIT");
// }

// let unit = prompt("Enter a unit");
// let unitCheckerMonth = (unit * 150) * 30;
// let unitCheckerYear = unitCheckerMonth * 12;
// let unitCheckerAnnualDiscount = (unitCheckerYear / 100) * 20;
// let yearDiscount = unitCheckerYear - unitCheckerAnnualDiscount;

// console.log(
//   ` you have a 20% discount this year so you will be  paying ${yearDiscount} this year `
// );

// let year = prompt("Enter a year");
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log("This is not  a leap year");
// }

// let p = prompt("Enter First number");
// let q = prompt("Enter Second number");
// let r = prompt("Enter Third number");
// if (p > q && r) {
//   console.log("Your first number is the highest");
// } else if (q > p && r) {
//   console.log("Your second number is the highest");
// } else if (r > q && p) {
//   console.log("Your third number is the highest");
// } else {
//   console.log("none");
// }

// let name = prompt("Enter a name");

// switch (name) {
//   case "a":
//     console.log("You matched name a");
//     break;
//   case "b":
//     console.log("You matched name b ");
//     break;
//   case "c":
//     console.log("You matched name c");
//     break;
//   case "d":
//     console.log("You matched name d");
//     break;
//   case "e":
//     console.log("You matched name e");
//     break;
//   case "f":
//     console.log("You matched name f");
//     break;
//   case "g":
//     console.log("You matched name g");
//     break;
//   case "h":
//     console.log("You matched name h");
//     break;
//   default:
//     console.log("You matched none");
// }

// let number = prompt("Enter a number");

// switch (number) {
//   case "1":
//     console.log("You matched case 1 ");
//     break;
//   case "1":
//     console.log("You matched case 1 ");
//     break;
//   case "2":
//     console.log("You matched case 2 ");
//     break;
//   case "3":
//     console.log("You matched case 3 ");
//     break;
//   case "4":
//     console.log("You matched case 4 ");
//     break;
//   case "5":
//     console.log("You matched case 5 ");
//     break;
//   default:
//     console.log("none");
// }

// let withdrawalAmount = prompt("Enter amount you want to withdraw");
// if (withdrawalAmount >= 100000) {
//   console.log("Withdrawal Succesful");
// } else {
//   console.log("Invalid amount");
// }

// let firstNumber = prompt("Enter your first number");
// let opeartor = prompt("Enter an operator");
// let secondNumber = prompt("Enter your second number");
// let operatorMinus = firstNumber - secondNumber;
// let operatorPlus = firstNumber + secondNumber;
// let operatorDivide = firstNumber / secondNumber;

// switch (opeartor) {
//   case "-":
//     console.log(operatorMinus);
//     break;
//   case "+":
//     console.log(operatorPlus);
//     break;
//   case "/":
//     console.log(operatorDivide);
//     break;
//   default:
//     console.log("error");
// }

// let generalAge = prompt("Enter your age");
// if (generalAge <= 18) {
//   console.log("Your ticket price is $3");
// } else if (generalAge <= 60) {
//   console.log("Your ticket price os $10");
// } else if (generalAge > 60) {
//   console.log("Your ticket price is $8");
// } else {
//   console.log("Input an age");
// }
// let birthMonth = prompt("Enter your birth month");

// switch (birthMonth) {
//   case "january":
//     console.log("Your zodiac sign is january");
//     break;
//   case "febuary":
//     console.log("Your zodiac sign is aquarius");
//     break;
//   case "march":
//     console.log("Your zodiac sign is march");
//     break;
//   case "april":
//     console.log("Your zodiac sign is april");
//     break;
//   case "may":
//     console.log("Your zodiac sign is may");
//     break;
//   case "june":
//     console.log("Your zodiac sign is june");
//     break;
//   case "july":
//     console.log("Your zodiac sign is july");
//     break;
//   case "august":
//     console.log("Your zodiac sign is august");
//     break;
//   case "september":
//     console.log("Your zodiac sign is september");
//     break;
//   case "october":
//     console.log("Your zodiac sign is october");
//     break;
//   case "november":
//     console.log("Your zodiac sign is november");
//     break;
//   case "december":
//     console.log("Your zodiac sign is december");
//     break;
// }

// let firstSide = prompt("What is the length of your left side ?");
// let secondSide = prompt("What is the length of your right side ?");
// let thirdSide = prompt("What is the length of your bottom side ?");

// if (firstSide == secondSide && thirdSide) {
//   console.log("This is an Equliteral Triangle");
// } else if (secondSide != firstSide && thirdSide) {
//   console.log("This a Isocceles Triangle ");
// } else if (thirdSide != firstSide && secondSide) {
//   console.log("This is an Scalence Triangle");
// }

// let number = 20;
// for (i = 1; i < number; i++) {
//   console.log(i);
// }

// let lines = 5;
// for (i = 1; i <= lines; i++) {
//   let stars = "";
//   {
//     for (j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// let number = 3;
// let operator = "X";
// for (let i = 1; i <= 10; i++) {
//   let operation = i * number;

//   console.log(`${number} ${operator} ${i} = ${operation}`);
// }

// let oddnumbers = 500;
// let sum = 0;
// for (i = 1; i <= oddnumbers; i++) {
//   if (i % 2 != 0) {
//     console.log(i);

//     sum += i;
//   }
// }
// console.log(` The sum of all the odd number is ${sum}`);

//       let numbers = 20;
//       for (i = 1; i <= numbers; i++) {
//         if (i % 3 != 0) {
//           console.log(i);
//         }
//       }
// FOR FOOR LOOP: i understood thst in for loops you have a specific numbers of time you
//  want your code to run
// FOR WHILE LOOP: i understood that in while loops that you dont know the specific
//  number of times your code will run
// FOR DOWHILE LOOPS: you dont have a sepcific times yopu want your code to run but
//  you know the code must execute atleast once when it runs

// let numbers = 100;
// for (i = 1; i <= numbers; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// let sum = 0;
// let userInput = prompt("Enter a number");
// for (i = 1; i <= userInput; i++) {
//   sum += i;
// }

// console.log(`The sum of all your numbers is = ${sum}`);

// let userInput2 = prompt("Enter a number");
// let opeartor = "X";
// for (i = 1; i <= userInput2; i++) {
//   let multiply = userInput2 * i;
//   // console.log(userInput2, opeartor, i, "=", multiply);
//   console.log(`${userInput2}`, `${opeartor}`, `${i} =`, `${multiply}`);
// }

// let userNumber = prompt("Enter a number");

// for (i = userNumber; i >= 1; i--) {
//   console.log(i);
// }

// let number = 30;
// for (i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// let option = prompt("Enter an option");
// for (i = 1; i <= option; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// function name(a, b, ...gain) {
//   console.log(a, b, gain);
// }
// name(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let numbers = 300;
// let sum = 0;
// for (i = 1; i <= numbers; i++) {
//   if (i % 2 != 0) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log("The total of the odd numbers is ", sum);

// let number = 20;

// let numberChecker = number + " is a " + typeof number;
// console.log(numberChecker);

// let name = prompt("Enter a name");
// let nameChecker = `${name} is a ${typeof name}`;
// console.log(nameChecker);

// "(6) : Which movie won the Academy Award for Best Picture in 1994?",
// "(7) : Who holds the record for the most goals in World Cup history?",
// "(8) :  Which was the first president of Nigeria?",
// "(9) : Who wrote 48 Laws of power?",
// "(10) : Who programmed this quiz?",

const quizQuestions = [
  {
    question: "Who is the author of harry porter?",
    options: [
      "(1)  J.R.R. Tolkien",
      "(2)  J.K. Rowling",
      "(3) George R.R. Martin",
      "(4) Suzanne Collins",
    ],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "Who was the first president of the United States?",
    options: [
      " (1)  George Washington",
      "(2)  Thomas Jefferson",
      "(3) Abraham Lincoln",
      "(4) John Adams",
    ],
    correctAnswer: "George Washington",
  },

  {
    question: "What is the chemical symbol for water?",
    options: [" (1) O2", " (2) CO2", " (3) H20", " (4) O3"],
    correctAnswer: "H20",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [" (1) Earth", " (2) Mars", " (3) Jupiter", " (4) Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      " (1) Atlantic Ocean",
      " (2) Indian Ocean",
      " (3) Arctic Ocean",
      " (4) Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: [" (1) Oxygen", " (2) Gold", " (3) Osmium", " (4) Ozone"],
    correctAnswer: "Oxygen",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      " (1) Harper Lee",
      " (2) Mark Twain",
      " (3) Charles Dickens",
      " (4) J.K. Rowling",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the square root of 64?",
    options: [" (1) 6", " (2) 8", " (3) 10", " (4) 12"],
    correctAnswer: "8",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: [" (1) China", " (2) Japan", " (3) Korea", " (4) Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: [" (1) Gold", " (2) Iron", " (3) Diamond", " (4) Platinum"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      " (1) Leonardo da Vinci",
      " (2) Pablo Picasso",
      " (3) Vincent van Gogh",
      " (4) Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which element has the atomic number 1?",
    options: [" (1) Helium", " (2) Oxygen", " (3) Hydrogen", " (4) Carbon"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What does HTML stand for?",
    options: [
      " (1) Hyper Text Markup Language",
      " (2) High Text Machine Language",
      " (3) Hyperlink Text Markup Language",
      " (4) High Time Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question:
      "What is the correct syntax to print 'Hello World' in JavaScript?",
    options: [
      " (1) echo('Hello World');",
      " (2) console.log('Hello World');",
      " (3) print('Hello World');",
      " (4) printf('Hello World');",
    ],
    correctAnswer: "console.log('Hello World');",
  },
  {
    question:
      "Which of the following is used to declare a variable in JavaScript?",
    options: [" (1) var", " (2) let", " (3) const", " (4) All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question:
      "Which of the following data types is not primitive in JavaScript?",
    options: [" (1) String", " (2) Boolean", " (3) Object", " (4) Number"],
    correctAnswer: "Object",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: [" (1) append()", " (2) push()", " (3) add()", " (4) insert()"],
    correctAnswer: "push()",
  },
  {
    question: "What does CSS stand for?",
    options: [
      " (1) Computer Style Sheets",
      " (2) Creative Style Sheets",
      " (3) Cascading Style Sheets",
      " (4) Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question:
      "Which of the following is used to loop through an array in JavaScript?",
    options: [" (1) for", " (2) forEach", " (3) map", " (4) All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question:
      "What is the result of the following code: '5' + 3 in JavaScript?",
    options: [" (1) 53", " (2) 8", " (3) '53'", " (4) Error"],
    correctAnswer: "'53'",
  },
  {
    question: "What is the correct way to create a function in JavaScript?",
    options: [
      " (1) function myFunction()",
      " (2) function:myFunction()",
      " (3) def myFunction()",
      " (4) function = myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question: "Which of the following is not a JavaScript framework?",
    options: [" (1) React", " (2) Angular", " (3) Django", " (4) Vue.js"],
    correctAnswer: "Django",
  },
  {
    question:
      "Which operator is used for strict equality comparison in JavaScript?",
    options: [" (1) ==", " (2) !=", " (3) ===", " (4) !=="],
    correctAnswer: "===",
  },
  {
    question:
      "What is the correct syntax to select an element with the id 'myElement' using JavaScript?",
    options: [
      " (1) getElementById('myElement')",
      " (2) document.getElementById('myElement')",
      " (3) document.selectById('myElement')",
      " (4) document.getElement('myElement')",
    ],
    correctAnswer: "document.getElementById('myElement')",
  },
  {
    question: "In JavaScript, which of the following is a falsy value?",
    options: [" (1) 0", " (2) '0'", " (3) []", " (4) {}"],
    correctAnswer: "0",
  },
  {
    question:
      "What is the output of the following code in JavaScript: 'typeof null'?",
    options: [" (1) object", " (2) null", " (3) undefined", " (4) Error"],
    correctAnswer: "object",
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      " (1) '==' compares value only, '===' compares value and type",
      " (2) '==' compares value and type, '===' compares only value",
      " (3) There is no difference",
      " (4) '==' is used for objects only",
    ],
    correctAnswer: "'==' compares value only, '===' compares value and type",
  },
  {
    question:
      "Which method is used to convert a string to an integer in JavaScript?",
    options: [
      " (1) parseInt()",
      " (2) toInteger()",
      " (3) Number()",
      " (4) convert()",
    ],
    correctAnswer: "parseInt()",
  },
  {
    question: "Which of the following is not a valid JavaScript event?",
    options: [" (1) click", " (2) mouseover", " (3) hover", " (4) focus"],
    correctAnswer: "hover",
  },
  {
    question: "What does 'DOM' stand for in web development?",
    options: [
      " (1) Document Online Model",
      " (2) Document Object Model",
      " (3) Data Object Model",
      " (4) Digital Object Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "What is the capital city of France?",
    options: [" (1) London", " (2) Paris", " (3) Rome", " (4) Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "What is sushi traditionally made of?",
    options: [
      " (1)  Rice and chicken",
      " (2)  Rice and fish",
      " (3) Noodles and vegetables",
      " (4) Fish and bread",
    ],
    correctAnswer: "Rice and fish",
  },
  {
    question: "Who founded Microsoft?",
    options: [
      "(1)  Steve Jobs",
      " (2) Mark Zuckerberg",
      " (3) Bill Gates",
      " (4) Elon Musk",
    ],
    correctAnswer: "BillGates",
  },
  {
    question: "Who wrote The Great Gatsby?",
    options: [
      " (1)  Mark Twain",
      " (2) Charles dicken",
      " (3) F scott fitzgard",
      " (4) harper lee",
    ],
    correctAnswer: "F scott fitzgard",
  },
  { error: "Try Again" },
];

let randomQuestion = Math.floor(Math.random() * quizQuestions.length);

// let questionname = prompt("Choose a number to answer a question");
// questionname = parseInt(questionname);

// if (randomQuestion === questionname) {
let randomGenerator = quizQuestions[randomQuestion];
//   console.log(randomGenerator.question);
//   console.log("options :", randomGenerator.options);
// }

randomGenerator = quizQuestions[randomQuestion];

// let error = (document.querySelector(".displayer2").textContent = "Try Again");

if (quizQuestions.length >= 0 && randomGenerator) {
  document.querySelector(".displayer").textContent = randomGenerator.question;
} else {
  document.querySelector(".displayer").textContent = randomGenerator.error;
}

let those = document
  .getElementById("input22")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checker();
    }
  });

function checker() {
  let info = document.getElementById("input22").value;
  if (info.toLowerCase() === randomGenerator.correctAnswer.toLowerCase()) {
    document.querySelector(".displayer").textContent = "CORRECT";
  } else {
    document.querySelector(".displayer").textContent =
      "wrong!! The Correct Answer is" + " " + randomGenerator.correctAnswer;
  }
}
// ` Wrong::Correct Answer is ${randomGenerator.correctAnswer}`;

// document.querySelector(".options").textContent = randomGenerator.options;
// let options = document.querySelector(".options").style;
// options.style.color = "red";
// options.style.display = "block";

const optionsContainer = document.querySelector(".options");
optionsContainer.innerHTML = "";

randomGenerator.options.forEach((option) => {
  const optionElement = document.createElement("div");
  optionElement.textContent = option;
  optionElement.classList.add("bg-blue-300", "p-2", "rounded", "mt-[10px]");
  optionsContainer.appendChild(optionElement);
});
if (quizQuestions.length === 0 && randomGenerator) {
  const removal = document.querySelector("div");
  if (removal) {
    optionsContainer.classList.remove("div");
  }
}
// alert(`${quizQuestions[0].question}`);
// let numbers = prompt("Choose a number to answer a question");
// for (i = quizQuestions; i >= 1; i++) {
//   switch (numbers) {
//     case "1":
//       {
//         console.log(quizQuestions[2]);
//       }

//       break;

//     default:
//   }
//   //   if (numbers === 1) {
//   //     console.log(quizQuestions[2]);
//   //   }
// }
// let questions = prompt(quizQuestions);
