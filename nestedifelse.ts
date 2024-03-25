//Nested If Else work practice

/*let username : string = "Adnan Masood"
let pw : string = "pak123"
let code : number = 4566

if(username === "Adnan Masood" && pw == "pak123"){
    if(code == 456){
        console.log("Welcome user", username)
    }
    else{
console.log("Invalid code")
    }
}
else{
    console.log("Invalid user name or password")
}   */

/*let username : string = "Adnan Masood"
let pw : string = "pak123"
let code : number = 4566

if(username === "Adnan Masood" && pw == "pak123"){
    console.log("Kindly provide code")
    if(code == 456){
        console.log("Welcome user", username)
    }
    else{
console.log("Invalid code")
    }
}
else{
    console.log("Invalid user name or password")
}*/

let username : string = "Adnan"
let pw : string = "pak123"
let code : number = 456

if(username === "Adnan Masood" && pw == "pak123"){
    console.log("Kindly provide code")
    if(code == 456){
        console.log("Welcome user", username)
    }
    else{
console.log("Invalid code")
    }
} else if (username === "Adnan " && pw == "pak123"){
    console.log("Kindly provide code")
    if(code == 456){
        console.log("Welcome user", username)
    }
    else{
console.log("Invalid code")
    }
}
else{
    console.log("Invalid user name or password")
}