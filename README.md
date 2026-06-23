# OrangeHRM Login Automation Assessment

## Application Chosen

**Application:** OrangeHRM Demo

**URL:** https://opensource-demo.orangehrmlive.com/

### Why I Chose This Application

OrangeHRM is a widely used HR management platform that supports employee, payroll, and workforce management processes. Since payroll and employee compensation are closely related to finance operations, it provides a suitable environment to demonstrate testing approaches in a finance-adjacent domain.

---

## Task 1 – Manual Test Cases

Module Selected: **Login**

A set of manual test cases was created covering:

* Positive scenarios (valid login)
* Negative scenarios (invalid username/password, missing credentials)
* Boundary and validation scenarios

Location:

```text
testcases/manual-testcases.md
```

---

## Task 2 – UI Automation

### Framework and Language

* Framework: Playwright
* Language: JavaScript
* Design Pattern: Page Object Model (POM)

### Automated Scenarios

The following login scenarios were automated:

1. Successful login with valid credentials
2. Login using Enter key
3. Invalid password validation
4. Invalid username validation

### Project Structure


pages/
 └── LoginPage.js

testData/
 └── loginData.json

tests/
 └── ui-tests/
      └── TS001.spec.js

### Automation Highlights

* Page Object Model implementation
* Positive and negative test coverage
* Assertions for URL and validation messages
* Playwright auto-waiting (no hard-coded waits or Thread.sleep)

---

## Task 3 – API Automation

### Framework and Language

* Playwright API Testing
* JavaScript

### API Used

JSONPlaceholder REST API

https://jsonplaceholder.typicode.com

### Automated Scenarios

1. Successful GET request

   * Validate status code
   * Validate response fields and data types

2. Successful POST request

   * Validate status code
   * Validate created resource fields

3. Failure scenario

   * Validate handling of invalid endpoint/request

Location:
tests/api-tests/


### Additional Improvements

* Base URL configured through Playwright configuration
* Response field validation included

---

## How to Run the Project

### Install Dependencies
npm install

### Install Playwright Browsers
npx playwright install

### Run All Tests
npx playwright test

### Run UI Tests Only
npx playwright test tests/ui-tests

### Run API Tests Only
npx playwright test tests/api-tests

### View HTML Report
npx playwright show-report



