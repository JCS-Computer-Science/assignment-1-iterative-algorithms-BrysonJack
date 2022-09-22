function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let ArrayNumb = array.length - 1
	let ArrayResponse = 0
	let Offset = 0
	let SearchNumb = 23256565432152134546546132215

	while (Offset <= ArrayNumb) {			
		SearchNumb = Math.ceil((ArrayNumb + Offset) / 2)
		if (array[SearchNumb] < searchTerm) {
			Offset = SearchNumb + 1
		}else if (array[SearchNumb] > searchTerm){
			ArrayNumb = SearchNumb - 1 
		}else if (array[SearchNumb] = searchTerm){
			return SearchNumb
		}else{
			break
		}

	}
	return ArrayResponse;
}

module.exports = binarySearch;

//REFERENCE 
