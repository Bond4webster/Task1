function openProperty(obj) {
    for (key in obj){
        if (typeof obj[key] == 'object'){
            return openProperty(obj[key]);
        }
        else{
            return obj[key];
        }
    }
}
openProperty({a:10});