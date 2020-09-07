function linearEqua(a, b){
    if(a==0){
        if(b==0) return ' co vo so nghiem';
        else return ' vo nghiem';
    }else return -b/a;
}
document.write("Phuong trinh co nghiem" + "&nbsp" + linearEqua(5, 8));