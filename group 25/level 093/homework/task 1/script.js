function comperehesiveArray() {

    // //1
    let array1 = [1, 2, 3];
    let array2 = [1, 2, 3];
    let array3 = [1, 2, 3];

    // //2
    let mergedArray = array1.concat(array2);

    // //3
    mergedArray.copyWithin(5, 0, 3);
    console.log(mergedArray);

    // //4
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    list.fill(0,6,10);
    console.log(list);

    // //5
    list.pop(-1);
    console.log(list);

    // //6
    list.shift();
    console.log(list);

    // //7
    list.unshift(100, 200);
    console.log(list);

    // //8
    list.splice(2,2,100,200);
    console.log(list);

    // //9
    let sliceList =list.slice(5,10);
    console.log(sliceList);

    // //10;
    console.log(list.join("-"));
}