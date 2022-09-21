function linearSearch(array, searchTerm) {
	/*
	** Check each element from start to finish
	** until you find an element that matches the search term
	**
	** Return the index of the found element
	*/
	let SearchReturn = 110
	let SearchArray = array
    let SearchLength = array.length
	for (let i = 0; i < SearchLength; i++) {
		if(SearchArray[i] === searchTerm){
			SearchReturn = i
			// array.indexOf(SearchArray)
		}
		console.log("ran")
	}
	return SearchReturn;
}

module.exports = linearSearch;
