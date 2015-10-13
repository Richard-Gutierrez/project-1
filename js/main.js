
// Start button

$('.start-button').click(function(){
	$('.cat').css('visibility','visible')
});




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
	console.log('clicked');
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
    

 
      
      
      
