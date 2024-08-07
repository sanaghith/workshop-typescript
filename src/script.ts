//this is function

console.log(Math.floor(10.5))

type AGE = number | string
type MyFct = (name : string)  => string


const fct :MyFct  = (name) => {
    return `hello my name is ${name}`
}

console.log(fct("name"))


interface Person {
    firstName : string ,
    lastName : string ,
    age : AGE
}


const newPerson : Person = {
    firstName : "foulen" ,
    lastName : "falten" ,
    age : "25"
}


