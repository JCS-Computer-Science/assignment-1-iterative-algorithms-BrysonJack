function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let SelectionArray = array
	let SelectionLength = array.length
	for (let i = 0; i < SelectionLength; i++) {
		let Lowest = i
		for (let x = i + 1; x < SelectionLength; x++) {
			if (SelectionArray[x] < SelectionArray[Lowest]) {
				Lowest = x
			}
		}
		if (Lowest != i) {
			Store = SelectionArray[i]
			SelectionArray[i] = SelectionArray[Lowest]
			SelectionArray[Lowest] = Store
		}
	}




	return array;
}

module.exports = selectionSort;
