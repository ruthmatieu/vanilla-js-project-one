const colors = ['green', 'red', 'rgba(133,122,200)', 'f15025', 'yellow'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    
    //get random # between 0 - 3 because we have 4 items in the array 
    const randomNumber = getRandomNumner();
    console.log(randomNumber);
    //once clicked, we will change the backgroudn color (body)
    document.body.style.backgroundColor = colors[randomNumber];
    //we change the text inside <span> to say which color from the array os chosen
    color.textContent = colors[randomNumber];

});


//instead of harcoding, we will create a random number function
function getRandomNumner() {
    return Math.floor(Math.random() * colors.length); //floor rounds to the nearest whole number and random gets a random number of the colors array's length
}