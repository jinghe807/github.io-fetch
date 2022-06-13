document.addEventListener("DOMContentLoaded",getDegrees());

async function getDegrees(url) {
	//Create a fetch request to return a promise
	let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
	await fetch(url)

		
	//Resolve the promise using the Response class
	.then((response) => response.json())
	
	//Process the returned JSON data using JavaScript
	.then((data) => 
	{for (var i=0;i<data.data.length;i++){
	  eduTable = document.getElementById('myData');
	  eduTable.innerHTML +=
	  "<tr><td>" + data.data[i].degrees.Program_Major + "</td>" +
	  "<td align='right'>" + data.data[i].degrees.Type + "</td>" +
	  "<td align='right'>" + data.data[i].degrees.School + "</td>" +
	  "<td align='right'>" + data.data[i].degrees.Year_conferred + "</td></tr>";}
	});
  
	} else {
  	alert("HTTP-Error: " + response.status);// alert status code of the response
	}
}


  getDegrees("education.json");

