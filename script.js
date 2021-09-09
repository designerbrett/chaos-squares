function randomize() {
  for (var i = rando.children.length; i >= 0; i--){
 rando.appendChild(rando.children[Math.random() * i | 0]); 
}
}

function makeVis(j) {
	var photo = rando.children[j].firstElementChild;
	setTimeout(function() { photo.classList.add("visible"); }, 700 * j);
}

function sequentize(){
for (var j = 0; j <= rando.children.length; ++j) 
   makeVis(j);
}

var rando = document.getElementById('burningman'), waiter;
   
function fsort() {
randomize();
sequentize();
}
	
window.onresize = function() { 
  clearTimeout(waiter);
  waiter = setTimeout(fsort, 1000);
}

fsort();