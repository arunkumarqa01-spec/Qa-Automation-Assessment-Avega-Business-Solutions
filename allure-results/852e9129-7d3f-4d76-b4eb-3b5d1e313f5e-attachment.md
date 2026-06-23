# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui-tests\TS001.spec.js >> OrangeHRM Login Functionality >> TC001 - Verify successful login with valid credentials
- Location: tests\ui-tests\TS001.spec.js:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="password"]')
    - locator resolved to <input type="password" name="password" data-v-1f99f73c="" placeholder="Password" class="oxd-input oxd-input--active"/>
    - fill("admin123")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [active] [ref=e22]: Admin
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [ref=e29]
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
      - generic [ref=e34]:
        - generic [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e48]:
          - paragraph [ref=e49]: OrangeHRM OS 5.8
          - paragraph [ref=e50]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e51] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e52]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  | 
  5  |         this.usernameInput = 'input[name="username"]';
  6  |         this.passwordInput = 'input[name="password"]';
  7  |         this.loginButton = 'button[type="submit"]';
  8  |         this.errorMessage = '.oxd-alert-content-text';
  9  |     }
  10 | 
  11 |    async navigate() {
  12 |        
  13 |         await this.page.goto('https://opensource-demo.orangehrmlive.com', { waitUntil: 'domcontentloaded' });
  14 |     }
  15 | 
  16 |     async login(username, password) {
  17 |         await this.page.fill(this.usernameInput, username);
> 18 |         await this.page.fill(this.passwordInput, password);
     |                         ^ Error: page.fill: Test timeout of 30000ms exceeded.
  19 |         await this.page.click(this.loginButton);
  20 |     }
  21 | 
  22 |     async loginUsingEnter(username, password) {
  23 |         await this.page.fill(this.usernameInput, username);
  24 |         await this.page.fill(this.passwordInput, password);
  25 | 
  26 |         // Press Enter instead of clicking Login
  27 |         await this.page.press(this.passwordInput, 'Enter');
  28 |     }
  29 | }
  30 | 
  31 | module.exports = LoginPage;
```