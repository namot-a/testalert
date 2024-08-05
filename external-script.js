(function() {
    function addText() {
        console.log('Executing addText function');
        const targetDiv = document.querySelector('div[role="tablist"][data-qa="statuses_container"]');
        if (targetDiv) {
            console.log('Target element found');
            const textElement = document.createElement('div');
            textElement.textContent = 'ПРИВЕТ';
            textElement.style.fontSize = '20px';
            textElement.style.fontWeight = 'bold';
            textElement.style.marginBottom = '10px';

            targetDiv.parentNode.insertBefore(textElement, targetDiv);
            console.log('Text element added');
        } else {
            console.log('Target element not found');
        }
    }

    function checkAndAddText() {
        console.log('Checking for target element');
        const targetDiv = document.querySelector('div[role="tablist"][data-qa="statuses_container"]');
        if (targetDiv) {
            addText();
        } else {
            console.log('Target element not found, retrying in 2 seconds');
            setTimeout(checkAndAddText, 2000);
        }
    }

    checkAndAddText();
})();
