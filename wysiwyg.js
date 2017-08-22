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
	image: "https://images.genius.com/d651b980e15f0404dad7e5f46edb43c6.628x378x1.jpg",
	lifespan: {
		birth: 1982,
		death: "TBD"
	    }
	},
	{
	title: "Comedian",
	name: "Jim Jefferies",
	image: "http://thelaughbutton.com/site2/wp-content/uploads/2017/03/jeffries.jpg",
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

	domString += `<header>${personString.name}, ${personString.title}</header>`;
	domString += `<section><img src="${personString.image}" width="200"></section>`;
	domString += `<footer>${famousPeopleArray[i].lifespan.birth}, ${famousPeopleArray[i].lifespan.death}</footer>`;


	personContainer.innerHTML += domString;
}




















































