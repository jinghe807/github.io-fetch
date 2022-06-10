async function getDegrees(url) {
	  // fetch the url
	  await fetch(url)
	    //get your data here, and check for the response status. If it's not 200, throw an error
	    .then((response) => response.json())
	    .then((data) => 
		{for (var i=0;i<data.data.length;i++){
	      document.write(
	        `My first degree was a ${data.data[i].degrees.Program_Major} ${data.data[i].degrees.Type} from ${data.data[i].degrees.School} in ${data.data[i].degrees.Year_conferred}`
	      )}
		  });
	}
	

	getDegrees("education.json");

