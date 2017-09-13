
var colors = require('./colors');

function printColors(){
	console.log('First some yellow text'.yellow);
	console.log(colors.yellow.underline('Underline that text'));
	console.log('hello'.green); // outputs green text 
	console.log('i like cake and pies'.underline.red) // outputs red underlined text 
	console.log('inverse the color'.inverse); // inverses the color 
	console.log('OMG Rainbows!'.rainbow); // rainbow 
	console.log('Run the trap'.trap); // Drops the bass 	
}

var printColors = printColors();

module.exports = printColors;
