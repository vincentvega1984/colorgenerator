document.addEventListener('DOMContentLoaded', function() {

    const colorsCrads = document.querySelectorAll('.color'),
        generatePaletteBtn = document.querySelector('.generate-palette'),
        availableSymbols = '0123456789ABCDEF';

    function generateColor() {
        let hex = '#'
        for (let i = 0; i < 6; i++) {
            hex += availableSymbols[(Math.floor(Math.random() * availableSymbols.length))];
        }
        return hex;
    }

    function generatePalette () {
        colorsCrads.forEach(element => {
            if (!element.classList.contains('locked')) {
                let elementColor = generateColor();
                element.querySelector('.color__name').innerHTML = elementColor;
                element.style.backgroundColor = elementColor;
                element.querySelector('.color__copy').addEventListener('click', () => copyColor(elementColor, element.querySelector('.action-buttons')))
                element.querySelector('.color__lock').addEventListener('click', () => element.classList.add('locked')) 
            } else {
                element.querySelector('.color__lock').addEventListener('click', () => element.classList.remove('locked')) 
            }       
        });
    }

    function copyColor(color, elem) {
        navigator.clipboard.writeText(color);
        const messageDiv = document.createElement("div"),
            messageContent = document.createTextNode("Copied to clipboard!");
        messageDiv.classList.add('message')
        messageDiv.appendChild(messageContent)
        elem.appendChild(messageDiv)
        setTimeout(() => {
            messageDiv.remove()
        }, 1000);
    }

    generatePalette();

    generatePaletteBtn.addEventListener('click', () => generatePalette())
})
