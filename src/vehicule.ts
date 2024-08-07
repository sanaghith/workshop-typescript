interface Vehicle {
    make : string 
    model : string
    year : number
    start() : void
}

class Car implements Vehicle {
    make: string
    model: string
    year: number

    constructor(make : string , model : string , year :number){
        this.make = make
        this.model = model 
        this.year = year 
    }

    start(): void {
        console.log("start engin")
    }
}

const myCar = new Car("test" , "model" , 2024)

console.log('myCar', myCar)