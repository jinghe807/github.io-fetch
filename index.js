async function getDegrees(url) {
	  // fetch the url
	  await fetch(url)
	    //get your data here, and check for the response status. If it's not 200, throw an error
	    .then((response) => response.json())
	    .then((data) =>
	      document.write(
	        `My first degree was a ${college_degrees.data[0].degrees.bachelors.data.type} from ${college_degrees.data[0].degrees.bachelors.data.institution} in ${college_degrees.data[0].degrees.bachelors.data.date}`
	      )
	    );
	}
	

	getDegrees("education.json");

