import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.element', options);

$("document").ready(function(){
	handleHome();
})

function handleHome(){
	$(".element").typed({
		strings: [test, test1, test2],
		typeSpeed: 50,
		starDelay: 200,
		backDelay: 600,
		loop: true,
		showCursor: true,
		cursorChar: "|"
	});
}