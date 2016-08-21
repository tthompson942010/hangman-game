var words = ["dog", "horse", "elephant", "chicken", "hippopotamus"]
var blanksword = []
var letters;
var wordDisplay = document.getElementById("guessWord")
var lettersguessed;
var wins = 0;
var losses = 0;
var guesses = 7;
//function to pick a word, store the letters in an array, store an equal amount of "_"'s to another array, and write "_"'s to the guessWord div
	function pickword(){
		guesses = 7
		//empty the arrays
		document.getElementById('guesses').innerHTML = 'Guesses:' + guesses
		blanksword = [];
		letters=[];
		lettersguessed= [];
		wordDisplay.innerHTML = " "
		//pick the word from the words list, then split the word into letters in an array
		var i = Math.floor(Math.random()*words.length);
		var word = words[i];
		letters = word.split("");
		console.log(letters);
		//for loop to write the info to the div, and write an equal number of blanks to an array
		for (j = 0; j < letters.length; j++) {
			blanksword.push("_")
			wordDisplay.innerHTML = wordDisplay.innerHTML + "_ "
		}
	}

//take a keypress and convert it into a letter
	document.onkeydown = function () { 
		var codetoletter = String.fromCharCode(event.which)
		var letterchosen = codetoletter.toLowerCase();	
		console.log(letterchosen)

		if(lettersguessed.includes(letterchosen)){
			alert("you've already tried that letter")
		} else {
			if(letters.includes(letterchosen)){
				for (i = 0; i < letters.length; i++){
					if(letterchosen == letters[i]){
						blanksword[i] = letterchosen;
						wordDisplay.innerHTML = "";
						for(j = 0; j < blanksword.length; j++){
							wordDisplay.innerHTML = wordDisplay.innerHTML + blanksword[j] +" ";
						}
					} else {
					}
				}
			} else {
				console.log('wrong')
				guesses--
				document.getElementById('guesses').innerHTML = "Guesses:" + guesses

			}	
			lettersguessed.push(letterchosen)
		}

		if(blanksword.includes("_")){

		} else {
			alert("you win!")
			wins++
			document.getElementById('wins').innerHTML = "Wins:" + wins 
			pickword()

		}

		if (guesses <= 0){
			alert("you lose!")
			losses++
			document.getElementById('losses').innerHTML = "Losses:" + losses
			pickword()
		}
	}