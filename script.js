/*
The Random Quote Generator shares a different quote each time the participant clicks the "Show another quote" button.
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//30 second interval if they don't click the button
var intervalID = window.setInterval(printQuote, 30000);
var colors = new Array(
{
	color: "red"
},
{
	color: "blue"
},
{
	color: "green"
},
{
	color: "orange"
},
{
	color: "purple"
},
);
//function GetRandomColors
function getRandomColor(){
	var colorsLength = colors.length;
//select random color from the colors array
	var getRandomColorsId = Math.floor(Math.random() * colorsLength); //The maximum is exclusive and the minimum is inclusive
		return colors[getRandomColorsId];//returning a random background color from the colors array
		//that object is identified by the Id that it's given
}
var quotes = new Array(
{//first element of the array id of zero7cc
	quote: "It was a woman who drove me to drink and I never got the chance to thank her.",
	source: "W.C. Fields",
	citation: "Never Give a Sucker an Even Break",
	year: "1941",	
	tags: "Humor",
},
{//second element of the array id of one
	quote: "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.",
	source: "Mark Twain",
	
},
{//third element of the array id of two
	quote: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly, and applying all the wrong remedies.",
	source: "Groucho Marx",
	year: "1944",	
	tags: "Politics",
	},
{//fourth element of the array id of three
	quote: "Get busy living or get busy dying.",
	source: "Stephen King",
	citation: "Different Seasons",
	year: "1979",	
},
{//fifth element of the array id of four
	quote: "You know you.",
	source: "David Mitchell",
	citation: "Cloud Atlas",
	year: "1945",
},
{//sixth element of the array id of five
	quote: "A satisfied customer is the best business strategy of all.",
	source: "Michael LeBoeuf",
	tags: "Business",
},
{//third element of the array id of two
	quote: "However difficult life may seem, there is always something you can do and succeed at.",
	source: "Stephen Hawking",
	citation: "People's Daily Online",
	year: "2006",	
	},
);
//function GetRandomQuote
function getRandomQuote(){
	var quotesLength = quotes.length;
//select random quotes from the quotes array
	var getRandomQuoteId = Math.floor(Math.random() * quotesLength); //The maximum is exclusive and the minimum is inclusive
		return quotes[getRandomQuoteId];//returning an object from the quotes array
		//that object is identified by the Id that it's given
}
//function printQuote
function printQuote(){
	var quoteObj = getRandomQuote();//calls function getRandomQuote
	var colorObj = getRandomColor();//calls function getRandomColor
	var quoteHTML = '<p class="quote">' + quoteObj.quote + '</p>';
//<p class="quote">You can do anything but not everything</p>
      quoteHTML += '<p class="source">' + quoteObj.source;
//printQuote doesn't add a value for a missing citation or missing year    
if(typeof quoteObj.citation != 'undefined'){
	quoteHTML += '<span class="citation">' + quoteObj.citation +  '</span>';
}
 
if(typeof quoteObj.year != 'undefined'){
	quoteHTML += '<span class="year">' + quoteObj.year +  '</span>';
	}
//printQuote doesn't add a value for missing tags
if(typeof quoteObj.tags != 'undefined'){
	quoteHTML += '<span class="tags">' + quoteObj.tags +  '</span>';
}
	
quoteHTML += '</p>';
//printQuote displays the final HTML string to the page
document.getElementById('quote-box').innerHTML = quoteHTML;
//printQuote displays a random background color
document.body.style.backgroundColor = colorObj.color;
}

 
 























