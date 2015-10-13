
// Start button

$('.start-button').click(function(){
	$('.cat').css('visibility','visible')
	var numLetters = words [0].length;

	$('.underscore1, .underscore2, .underscore3').css('visibility','visible');



});
  
var words = ['CAT', 'DOG'];







// click any of the letters to choose the correct letter for the pic.


var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
				"P","Q","R","S","T","U","V","W","X","Y","Z"];




var a = 97;
var charArray = {};

console.log(charArray);




//to make an congradulatory screen with falling "bee" "ballons" "random"

//new images come out when the words are spelled correctly


// $.Letter.click...+ jquery


$('.letter').click(function(){
	var letter = this.innerHTML;

	// where it is in the word
	var indexInWord = words[0].indexOf(letter);

	// If it is in the word
	if (indexInWord !== -1){
		// Put it in the right div corresponding to the word
		var wordNumber = indexInWord + 1;

		// we are concatenating the string .underscore and 1 (or 2/3)
		// to get the class name of the elements with underscores on
		// the dom
		var className  = '.underscore' + wordNumber;

		console.log("letter: ", letter, "index: ", indexInWord, "number: ", wordNumber, "class name: ", className);
		
		$(className).text(letter);
	}
});





// When color button is clicked, generate on RGBA value
$(".color").click(function() {
    // Assign each color a random number 0-255
    var red = Math.background(Math.random() * 255);
    var green = Math.background(Math.random() * 255);
    var blue = Math.background(Math.random() * 255);
    
    //Generate on RGBA value from red, green, and blue
    var randomRGBA = 'rgba('+ red +', '+ green +', '+ blue +',1)';
    
    //and change the body's background to our random color
    $("body").css("background", randomRGBA);
    //Display the RGBA value in an alert window
    alert(randomRGBA);
});
    

 
      
      
      
