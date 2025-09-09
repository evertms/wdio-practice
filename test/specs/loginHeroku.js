import LoginPage from '../pageObjects/loginPage.js'
import SecurePage from '../pageObjects/securePage.js'

describe('Login en HerokuApp con POM', () => {
    it('Debe iniciar sesión exitosamente con credenciales válidas', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await SecurePage.isMessageDisplayed('You logged into a secure area!');
    });

    it('No debe iniciar sesión con credenciales inválidas', async () => {
        await LoginPage.open();
        await LoginPage.login('invalidUser', 'invalidPass');

        await SecurePage.isMessageDisplayed('Your username is invalid!');
    });
});