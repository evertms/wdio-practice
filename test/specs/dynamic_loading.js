describe('Prueba de carga dinámica', () => {
    it('Debe mostrar "Hello world!" siendo un elemento que está oculto en la página', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading');
        const link1 = await $('#content a[href="/dynamic_loading/1"]');
        await link1.click();

        const startButton = await $('#start button');
        const hiddenElement = await $('#finish h4');

        await startButton.click();

        await hiddenElement.waitForDisplayed();

        await expect(hiddenElement).toBeDisplayed();
        await expect(hiddenElement).toHaveText('Hello World!');
    });

    it('Debe mostrar "Hello world!" siendo un elemento que se renderiza después de tocar "Start"', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading');
        const link2 = await $('#content a[href="/dynamic_loading/2"]');
        await link2.click();

        const startButton = await $('#start button');

        await startButton.click();

        const helloWorldElement = await $('#finish h4');
        
        await helloWorldElement.waitForDisplayed();

        await expect(helloWorldElement).toBeDisplayed();
        await expect(helloWorldElement).toHaveText('Hello World!');
    });
});

/*describe('Prueba #2 de carga dinámica', () => {
    it('Debe mostrar "Hello world!" siendo un elemento que se renderiza después de tocar "Start"', async () => {
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading');
        const link2 = await $('#content a[href="/dynamic_loading/2"]');
        await link2.click();

        const startButton = await $('#start button');

        await startButton.click();

        const helloWorldElement = await $('#finish h4');
        
        await helloWorldElement.waitForDisplayed();

        await expect(helloWorldElement).toBeDisplayed();
        await expect(helloWorldElement).toHaveText('Hello World!');
    });
});
*/