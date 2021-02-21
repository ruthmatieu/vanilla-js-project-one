const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    
    let hexColor = '#'; //we must have the # and then the 6 numbers
    //we will set up a loop that will run 6 times...to get the 6 numbers for HEX

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; //we must have += not equal bc that'll override
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//set up a function so we can get 6 different colors insted of 6 colors of the same
 function getRandomNumber() {
     return Math.floor(Math.random() * hex.length);
 }