function linearEqua(a, b){
    if(a==0){
        if(b==0) return ' có vô số nghiệm';
        else return ' vô nghiệm';
    }else return -b/a;
}
let a=5;
let b=8;
document.write("Phương trình "+ a +"x + "+ b +"&nbsp = 0 có nghiệm" + "&nbsp" + linearEqua(a, b));