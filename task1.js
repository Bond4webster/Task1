function reverseStr(str){
    let newStr = '';
    str.split('').reverse().forEach(e=>{newStr += e})
    console.log(newStr);
}
reverseStr('1234');

function replaceFragment(str,flag,newfragm){
    str = str.replace(flag,newfragm);
    console.log(str);
}
replaceFragment('Привет','ив','ааа');