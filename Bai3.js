function countVowels(string){
    let str = string.split('');
    let count = 0;
    let check = 'ueoaiUEOAI';
    for(i=0; i<str.length; i++){
        if(check.indexOf(str[i])>=0) {
            count++;
        }
    }
    if(count==0) return false;
    else return count;
}

let string= "asdakwjends";
document.write("Số lượng ký tự nguyên âm trong chuỗi "+ string + "&nbsp là &nbsp" + countVowels(string));