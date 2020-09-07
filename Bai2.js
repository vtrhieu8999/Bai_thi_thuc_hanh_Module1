function index0f(number, array){
    for(i=0; i<array.length; i++){
        if(number==array[i]) return i;
    }
    return -1;
}

let numArr= [3,5,6,7,1,2,9,0];
document.write("Vi tri cua so 7 trong mang la" + "&nbsp" + index0f(7, numArr));