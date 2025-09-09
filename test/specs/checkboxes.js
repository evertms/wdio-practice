describe('Pruebas de checkboxes', () => {
    it('Debe seleccionar y deseleccionar checkboxes', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes'); 

        const firstCheckbox = await $('form#checkboxes input:nth-child(1)');
        const secondCheckbox = await await $('form#checkboxes input:nth-child(3)');

        await expect(firstCheckbox).not.toBeSelected();
        await expect(secondCheckbox).toBeSelected();

        await firstCheckbox.click();
        await secondCheckbox.click();

        await expect(firstCheckbox).toBeSelected();
        await expect(secondCheckbox).not.toBeSelected();
        
    })
});