var content = [
    "Smith College student",
    "Musician",
    "Programmer"
]

var part = 0;

var part_index = 0;

var interval_val;

var element = document.querySelector("#text");
var cursor = document.querySelector("#cursor");
//typing effect
function type(){
    var text = content[part].substring(0, part_index + 1);
    element.innerHTML = text;
    part_index++;

    if(text === content[part]){
        cursor.style.display = "none";
        clearInterval(interval_val);
        setTimeout(function(){
            interval_val = setInterval(Delete, 50);
        }, 1000);
    }
}
function Delete() {
	// Get substring with 1 characater deleted
	var text =  content[part].substring(0, part_index - 1);
	element.innerHTML = text;
	part_index--;


    if(text === '') {
		clearInterval(interval_val);

		// If current sentence was last then display the first one, else move to the next
		if(part == (content.length - 1))
			part = 0;
		else
			part++;
		
		part_index = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			cursor.style.display = 'inline-block';
			interval_val = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
interval_val = setInterval(Type, 100);



window.onscroll = function() {myFunction()};
  
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
header.classList.add("sticky");
} else {
 header.classList.remove("sticky");
	}
}
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.display === "block") {
	  content.style.display = "none";
	} else {
	  content.style.display = "block";
	}
});
(".front").click(function(){
(this).toggleClass("back")  ; 
})
}