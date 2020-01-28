let arr = [1, -4, 14, 0, 44, 234, -67, 0, 65, 44]

let bubleSort = function(arr) {
    for (i = 0; i < arr.length-1; i++) {
        for (j = 0; j < arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
}
