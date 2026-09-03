# 🏆 Durbar Group Contest 01

A collection of JavaScript problem-solving exercises completed for **Durbar Group Contest 01**.

---

## 📌 Overview

This repository contains solutions to 5 JavaScript programming problems. These problems focus on practicing core JavaScript concepts such as functions, arrays, loops, conditional statements, arithmetic operations, string manipulation, and problem-solving logic.

---

## 🧩 Problems Solved

### 1️⃣ Get Month Name

A function that receives a month number and returns the corresponding month name.

The solution uses an array containing all twelve month names.

**Examples:**

```js
getMonthName(9);  // September
getMonthName(5);  // May
getMonthName(3);  // March
getMonthName(11); // November
getMonthName(12); // December
```

---

### 2️⃣ Count Number Properties

A function that analyzes an array of numbers and counts:

- Even numbers
- Odd numbers
- Positive numbers
- Negative numbers

**Examples:**

```js
countNumberProperties([-5, 0, 3, -4, 1]);
countNumberProperties([2, 4, 6, 8, 10]);
```

The function returns an object containing the calculated number properties.

---

### 3️⃣ Check Math Operations for Nine

A function that checks whether any mathematical operation between two numbers results in `9`.

The operations checked are:

- Addition
- Subtraction
- Multiplication
- Division

**Examples:**

```js
checkMathOperationsForNine(4, 5);  // Nine
checkMathOperationsForNine(10, 1); // Nine
checkMathOperationsForNine(3, 3);  // Nine
checkMathOperationsForNine(18, 2); // Nine
checkMathOperationsForNine(1, 2);  // Nein
```

The function returns `"Nine"` if any operation results in `9`. Otherwise, it returns `"Nein"`.

---

### 4️⃣ Extract Body Content

A function that extracts the content inside the `<body>` tag from an HTML string.

The solution uses JavaScript's `split()` method to:

1. Separate the content after the opening `<body>` tag
2. Extract the content before the closing `</body>` tag
3. Return the content inside the body

---

### 5️⃣ Calculate Remaining Money

A function that calculates the remaining money after:

1. Buying a cake
2. Buying the maximum possible number of donuts with the remaining money

The solution uses `Math.floor()` to determine how many donuts can be purchased with the available remaining money.

Finally, the function returns the amount of money left.

---

## 🛠️ Concepts Practiced

This contest includes practice with:

- JavaScript Functions
- Arrays
- Loops
- Conditional Statements
- Arithmetic Operators
- String Methods
- Object Properties
- `Math.floor()`
- Problem-Solving Logic

---

## 📁 Project Structure

```text
Contest-1/
│
├── 1.getMonthName.js
├── 2.countNumberProperties.js
├── 3.checkMathOperationsForNine.js
├── 4.extractBodyContent.js
├── 5.calculateRemainingMoney.js
└── README.md
```

---

## 💻 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2️⃣ Go to the project folder

```bash
cd Contest-1
```

### 3️⃣ Run any JavaScript file

For example:

```bash
node 1.getMonthName.js
```

You can run the other problem files in the same way.

---

## 📦 Dependencies

This project does not use any external libraries or packages.

Only **JavaScript** and **Node.js** are required to run the files.

---

## 🎯 Purpose

The purpose of this repository is to practice JavaScript fundamentals and improve problem-solving skills through different programming challenges.

Each problem focuses on applying logical thinking and core JavaScript concepts to solve practical programming tasks.

---

## 👨‍💻 Author

**Joy Soren**

Aspiring Full Stack Developer | JavaScript & TypeScript Enthusiast

---

⭐ Feel free to explore the solutions and problem-solving approaches!