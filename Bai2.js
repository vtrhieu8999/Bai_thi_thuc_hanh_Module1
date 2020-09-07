function index0f(number, array){
    for(i=0; i<array.length; i++){
        if(number==array[i]) return i;
    }
    return -1;
}

let numArr= [3,5,6,7,1,2,9,0];
let num= +7;
document.write("Vị trí của số "+ num +"&nbsp trong mảng là" + "&nbsp" + index0f(num, numArr));