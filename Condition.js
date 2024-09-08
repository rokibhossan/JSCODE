var statement = 10


switch(true){

    case(statement >=9 && statement <=11):{
        console.log("meet at home");
    }
    break

    case(statement>=11 && statement <=13): {
        console.log("meet at office")
    }
    break

    case(statement>=14 && statement <=18): {
        console.log("meet at restaurant")
    }
    break

    default:
        console.log("no meeting")
}


// if(statement >=9 && statement <=11){
//     console.log("meet at home");
// }
// else if(statement>=11 && statement <=13){
//     console.log("meet at office")
// }
// else if(statement>=14 && statement<=18){
//     console.log("meet at restaurant")
// }
// else{
//     console.log("no meeting")
// }