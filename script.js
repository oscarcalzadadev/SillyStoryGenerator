/*Start*/
let inputField = document.getElementById('name');
let error = document.getElementById('error');
inputField.addEventListener('keyup', customName);
let styledName;

//Small array of "stories"
let storiesArr = [
    `I love cheesecake, especially when Bob makes it because it is so delicious and creamy!`,
    `I hate winter, especially when its cold for poor old Bob who can barely walk to the car without freezing like a popsicle.`,
    `Shut up & win Bob. Or are you too old to be able to hear us, especially from the balcony?`
]

//Generates story when button is pressed
let storyGeneratorButton = document.getElementById('btn');
let randomizedStory = document.getElementById('randomizedStory');
storyGeneratorButton.addEventListener('click', generateStory);

/*Generates random story*/
function generateStory() {
    if (styledName === undefined) {
        error.textContent = "Enter a name";
        inputField.style.border = "2px solid red";
    } else {
    let random = Math.floor(Math.random() * 2.99); //stores random number between 1 & 3
    let storedStory = storiesArr[random];
    let newStory = storedStory.replace('Bob', styledName);
    randomizedStory.style.display = "block";
    randomizedStory.textContent = newStory; 
    }
}



//Adjusts entered name
//Example: oScar would be transformed to Oscar
function customName(e) {
    if (inputField.value === ""  || inputField.value.length > 22) {
        if (inputField.value === "") {
            error.textContent = "Enter a name";
            inputField.style.border = "2px solid red";
        } else {
            error.textContent = "Name is too long";
            inputField.style.border = "2px solid red";
        }
    }
    if (e.keyCode === 13 && inputField.value.length < 22 && inputField.value !== "") {
      error.textContent = ""; //removes error message if applicable
      let name = inputField.value; //stores input value in variable
      console.log(name)
      inputField.value = ""; //clears input
      let lowercasedName = name.toLowerCase(); //lowercased version of name
      console.log(lowercasedName);
      let firstLetter = lowercasedName[0]; //Grabs first letter of lowercased version of name
      console.log(firstLetter);
      let uppercasedFirstLetter = firstLetter.toUpperCase(); //This stores the uppercased version of the first letter
      console.log(uppercasedFirstLetter);
      let newName = name.replace(name[0], uppercasedFirstLetter); //replaces first letter with uppercased version 
      console.log(newName);
      styledName = newName;
    }
}
