class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
        this.errorMessage = '.oxd-alert-content-text';
    }

   async navigate() {
       
        await this.page.goto('https://opensource-demo.orangehrmlive.com', { waitUntil: 'domcontentloaded' });
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async loginUsingEnter(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);

        // Press Enter instead of clicking Login
        await this.page.press(this.passwordInput, 'Enter');
    }
}

module.exports = LoginPage;