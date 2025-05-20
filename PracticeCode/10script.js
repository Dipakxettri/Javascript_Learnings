
let lang = prompt("Enter language code ex: EN,FR,SP");
let name = prompt("Enter your name plz");

switch(lang){
    case "EN":
        console.log(`Hello ${name}`);
        break;

    case "FR":
        console.log(`Bonjour ${name}`);
        break;

    case "SP":
        console.log(`Hola ${name}`);
        break;

    default:
        console.log("The language code is not supported or incorrect");
        
}