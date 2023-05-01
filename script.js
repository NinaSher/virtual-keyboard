const keyboard = [113, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

/*document.onkeypress = function (event){
	keyboard.push(event.charCode);
	console.log(keyboard);
}*/

function board () {
	let out = '';
	for (let i = 0; i < keyboard.length; i++) {
		if (i == 12 || i == 24) {
			out += '<divclass="clearfix></div>';
		}
		out += '<div class="key-box" data="'+ keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
	}
	document.querySelector('#keyboard').innerHTML = out;
}
board();

document.onkeypress = function (event) {
	document.querySelectorAll('#keyboard .key-box').forEach(function(element){
		element.classList.remove('active');
	});
	document.querySelector('#keyboard .key-box[data="' + event.keyCode +'"]').classList.add('active');
}
document.querySelectorAll('#keyboard .key-box').forEach(function(element){
	element.onclick = function(event){
		document.querySelectorAll('#keyboard .key-box').forEach(function(element){
			element.classList.remove('active');
		});
		let code = this.getAttribute('data');
		this.classList.add('active');
		console.log(code);
	}
})