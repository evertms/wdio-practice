describe('Pruebas de agregar y eliminar elementos', () => {
    // Definimos el número de elementos a agregar
    const NUM_ELEMENTS_TO_ADD = 5;

    it(`Debe agregar ${NUM_ELEMENTS_TO_ADD} elementos y luego eliminarlos todos`, async () => {
        // 1. Ir a la página
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');

        // 2. Encontrar el botón para agregar y hacer clic varias veces
        const addElementButton = await $('button[onclick="addElement()"]');
        for (let i = 0; i < NUM_ELEMENTS_TO_ADD; i++) {
            await addElementButton.click();
        }

        // 3. Encontrar y contar los botones de 'Delete'
        const deleteButtons = await $$('.added-manually');
        console.log("Número de botones 'Delete' encontrados: " + deleteButtons.length);

        // 4. Validar que la cantidad es la esperada
        await expect(deleteButtons).toBeElementsArrayOfSize(NUM_ELEMENTS_TO_ADD);

        // 5. Iterar sobre la lista y hacer clic en cada botón para eliminarlo
        for (const button of deleteButtons) {
            await button.click();
        }
        
        // 6. Validar que no queda ningún botón de 'Delete'
        const remainingDeleteButtons = await $$('.added-manually');
        await expect(remainingDeleteButtons).toBeElementsArrayOfSize(0);
    });
});