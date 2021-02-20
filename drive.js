const cars = []

cars.push("Subaru");

console.log(cars);

cars.push("Acura");

console.log(cars);

let carObject = {
    "Subaru" : "Impreza",
    "Chrysler" : "200"
};

let carObjectArray = Object.entries(carObject);

console.log(carObject);

console.log(carObjectArray);

carObject.Toyota = "Tacoma";

carObjectArray = Object.entries(carObject);

console.log(carObject);

console.log(carObjectArray);

/* THIS LOOP WAS INTENTIONALLY BROKEN*/
// for (let i = 0 ; i < carObjectArray.length; i++){
//     carObjectArray.push(carObjectArray[i])
//     console.log(carObjectArray);
// }

if (carObjectArray.length < 5){
    console.log("The array is less than 5 items long")
}

for (let i = 0; i < carObjectArray.length; i++){
    if(carObjectArray.Chrysler === '200'){
        console.log("There is a chrysler 200 on the list");
    }
}