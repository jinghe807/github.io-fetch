async function getDegrees(url) {
	  // fetch the url
	  await fetch(url)
	    //get your data here, and check for the response status. If it's not 200, throw an error
	    .then((response) => response.json())
	    .then((data) =>
	    for (i=0, i<data.length;i++){
	      document.write(
	        `My first degree was a ${data.data[0].degrees.Program_Major} ${data.data[0].degrees.Type} from ${data.data[0].degrees.School} in ${data.data[0].degrees.Year_conferred}`
	      )}
	    );
	}
	

	getDegrees("education.json");

