console.log("I'm in wysiwyg.js");


var famousPeopleArray = [
	{
	title: "Director",
	name: "David Fincher",
	image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc1NDkwMTQ2MF5BMl5BanBnXkFtZTcwMzY0ODkyMg@@._V1_UX214_CR0,0,214,317_AL_.jpg",
	lifespan: {
		birth: 1962,
		death: "TBD"
	    }
	},
	{
	title: "Actor",
	name: "Robert Downey Jr",
	image: "https://s-media-cache-ak0.pinimg.com/736x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99--tony-stark-robert-downey-jr-robert-downey-jr-hot.jpg",
	lifespan: {
		birth: 1965,
		death: "TBD"
	    }	
	},
	{
	title: "Musician",
	name: "Andrew McMahon",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Andrew_McMahon_playing_in_2014.jpg/220px-Andrew_McMahon_playing_in_2014.jpg",
	lifespan: {
		birth: 1982,
		death: "TBD"
	    }
	},
	{
	title: "Comedian",
	name: "Jim Jefferies",
	image: "https://pixel.nymag.com/imgs/daily/vulture/2017/06/05/05-jim-jefferies-chatroom-silo.w245.h368.2x.png",
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
	domString +=   `<footer class="yellowBG child">${famousPeopleArray[i].lifespan.birth}, ${famousPeopleArray[i].lifespan.death}</footer>`;
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

}












































