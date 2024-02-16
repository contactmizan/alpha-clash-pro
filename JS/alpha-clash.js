// function play() {
//     //step-1: hide the home screen
//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');
// }

function continueGame() {
    //step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame()
}