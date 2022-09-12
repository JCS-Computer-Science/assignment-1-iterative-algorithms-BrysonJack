function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    
        let BubLength  = array.length;
        for (let i = 0; i < BubLength; i++) {
            for (let x = 0; x < BubLength; x++) {
                if (array[x] < array[x + 1]) {
                    let Store = array[x]
                    array[x] = array[x + 1]
                    array[x + 1] = Store
                }
            }
        }
      
    
    
	return array;
}

module.exports = bubbleSort;

// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
// DO NOT COPY THIS,working example tho