const path = require('path');

describe('Pruebas de subida de archivos', () => {
    it('Debe subir un archivo exitosamente y verificar el nombre', async () => {
        const filePath = path.join(__dirname, 'test-file.txt');

        await browser.url('https://the-internet.herokuapp.com/upload');

        const uploadInput = await $('#file-upload');
        const uploadButton = await $('#file-submit');

        await uploadInput.setValue(filePath);

        await uploadButton.click();

        const uploadedFileName = await $('#uploaded-files');
        await expect(uploadedFileName).toHaveText('test-file.txt');

        const successMessage = await $('h3');
        await expect(successMessage).toHaveText('File Uploaded!');
    });
});