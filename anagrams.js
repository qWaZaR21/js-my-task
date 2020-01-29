function anagrams(str1, str2) {
    let array1 =  str1.split('').sort();
    let array2 =  str2.split('').sort();

    checkAnagrams(array1, array2);
    checkUnwantedChar(array1, array2);
}

function checkAnagrams(array1, array2) {
    console.log((JSON.stringify(array1) === JSON.stringify(array2)) ? true : false);
}

function checkUnwantedChar(array1, array2) {
    let count = array1.length + array2.length;
    for(i = 0; i < array1.length; i++) {
        for(j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                array1[i] = null;
                array2[j] = null;
                count = count - 2;
            }
        }
    }
    return console.log(count);
}

let string1 = 'qwerasd';
let string2 = 'rasdewq';
console.log('Для строк:' + string1 + ", " + string2)
anagrams(string1, string2);

let string3 = 'qwery';
let string4 = 'qwerid';
console.log('Для строк:' + string3 + ", " + string4)
anagrams(string3, string4);