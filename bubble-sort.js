function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    let BubSort = array
    let BubLength  = array.length;
    for (let i = 0; i < BubLength; i++) {
        for (let j = 0; j < BubLength; j++) {
            if (BubSort[j] > BubSort[j + 1]) {
                let Store = BubSort[j]
                BubSort[j] = BubSort[j + 1]
                BubSort[j + 1] = Store
            }
        }
    }   
   
    
    
	return array;
}

module.exports = bubbleSort;