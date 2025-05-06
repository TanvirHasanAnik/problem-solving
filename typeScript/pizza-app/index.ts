let myName: string = "Anik"
let numberOfWheels: number = 4
let isStudent:boolean = false

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let anik: Person = {
    name: "Tanvir Hassan Anik",
    age: 24,
    isStudent: true
}

let tanvir: Person = {
    name: "Tanvir Hassan Anik",
    age: 24,
    isStudent: true,
    address: {
        street: "11",
        city: "Dhaka",
        country: "Bangladesh"
    }
}