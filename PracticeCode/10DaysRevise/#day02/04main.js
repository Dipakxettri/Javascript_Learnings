let gmail = prompt(" Enter your gmail lenth should be more then 6 and less then 16 :");

if(gmail.length >= 6 && gmail.length <= 16){
    document.write(`${gmail}@gmail.com`)
}
else{
    document.write("Error");
}