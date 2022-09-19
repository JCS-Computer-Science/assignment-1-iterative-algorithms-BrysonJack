function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	// let Displace = 0
	let SortStop = 4
	let InsertSort = array
	let InsertLength  = array.length;
	if (InsertSort[0] > InsertSort[1]) {
		let Store = InsertSort[0]
		InsertSort[0] = InsertSort[1]
		InsertSort[1] = Store
	}
	for (let i = 0; i < (InsertLength + 1); i++) {
		if (InsertSort[i + 1] > InsertSort[i + 2]) {
			for (let x = 0; x < SortStop; x++) {
				if (InsertSort[x] > InsertSort[i + 2]) {
					Store = InsertSort[x]
					InsertSort[x] = InsertSort[i + 2]
					InsertSort[i + 2] = Store
				}
			}
			SortStop = SortStop + 1
		}

	}  

	return InsertSort;
}

module.exports = insertionSort;
