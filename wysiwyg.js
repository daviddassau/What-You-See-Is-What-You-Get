console.log("I'm in wysiwyg.js");


var famousPeopleArray = [
	{
	title: "Director",
	name: "David Fincher",
	image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc1NDkwMTQ2MF5BMl5BanBnXkFtZTcwMzY0ODkyMg@@._V1_UX214_CR0,0,214,317_AL_.jpg",
	bio: "David Andrew Leo Fincher is an American director, best known for his films <b>Fight Club</b>, <b>Gone Girl</b>, and <b>The Girl With The Dragon Tattoo</b>.",
	lifespan: {
		birth: 1962,
		death: "TBD"
	    }
	},
	{
	title: "Actor",
	name: "Robert Downey Jr",
	image: "https://s-media-cache-ak0.pinimg.com/736x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99--tony-stark-robert-downey-jr-robert-downey-jr-hot.jpg",
	bio: "Robert Downey Jr is an American actor, who has starred in such films as the <b>Iron Man</b> trilogy, <b>Tropic Thunder</b>, and <b>Zodiac</b>.",
	lifespan: {
		birth: 1965,
		death: "TBD"
	    }	
	},
	{
	title: "Musician",
	name: "Andrew McMahon",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Andrew_McMahon_playing_in_2014.jpg/220px-Andrew_McMahon_playing_in_2014.jpg",
	bio: "Andrew McMahon is an American musician from Orange County, CA. His first band was Something Corporate. After putting out two LPs, he went solo with Jack's Mannequin. He now plays in Andrew McMahon In The Wilderness.",
	lifespan: {
		birth: 1982,
		death: "TBD"
	    }
	},
	{
	title: "Comedian",
	name: "Jim Jefferies",
	image: "https://pixel.nymag.com/imgs/daily/vulture/2017/06/05/05-jim-jefferies-chatroom-silo.w245.h368.2x.png",
	bio: "Geoff James Nugent is an Australian stand-up comedian. He is known for his raunchy, unapologetic comedy, with bits on gun control, Donald Trump, and getting his girlfriend pregnant after only two months of dating. He also starred in FX's show <b>Legit</b>",
	lifespan: {
		birth: 1970,
		death: "TBD"
	    }	
	}
];


var personContainer = document.getElementById('container');

for (var i = 0; i < famousPeopleArray.length; i++){
	var personString = famousPeopleArray[i];
	var domString = "";

	domString += `<div class="personContainerDiv" id="personContainerDiv">`;
	domString +=   `<h2 class="lightBlueBG child">${personString.name}</h2>`;
	domString +=   `<h4 class="yellowBG child">${personString.title}</h4>`;
	domString +=   `<section class="lightBlueBG child" id="famousPersonImage"><img src="${personString.image}"></section>`;
	domString +=   `<p id="bio-output-target" class="yellowBG">${personString.bio}</p>`
	domString +=   `<footer class="lightBlueBG child">${famousPeopleArray[i].lifespan.birth}, ${famousPeopleArray[i].lifespan.death}</footer>`;
	domString += `</div>`;

	personContainer.innerHTML += domString;
}


var selectedFamousPerson;

document.getElementById("container").addEventListener("click", function(event){
	addDottedBorder(event);
});


function addDottedBorder(event) {
  if (event.target.classList.contains("child")){
    selectedFamousPerson = event.target.parentNode;
  } else if (event.target.parentNode.parentNode.classList.contains("personContainerDiv")){
    selectedFamousPerson = event.target.parentNode.parentNode;
  } else if (event.target.classList.contains("personContainerDiv")){
    selectedFamousPerson = event.target;
  }
  selectedFamousPerson.classList.add("border-when-selected");
  document.getElementById("inputText").focus();
}


// when you begin typing in the input field, the current bio is cleared, and what you type is displayed
var bioOutputTarget = document.getElementById("bio-output-target");
var inputField = document.getElementById("inputText");

inputField.addEventListener("keypress", function(){
	bioOutputTarget.innerHTML = inputField.value;
});


// content of input field is cleared when enter is pushed
inputField.addEventListener("keydown", function(e){
	console.log(e);
	if (e.key === 'Enter'){
		document.getElementById("inputText").value = "";
	}
});







































