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

let string= "asd-1dfe-2asd-3";
document.write("So luong nguyen am trong chuoi "+ string + "&nbsp la &nbsp" + countVowels(string));