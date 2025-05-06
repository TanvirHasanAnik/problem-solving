let myName: string = "Anik"
let numberOfWheels: number = 4
let isStudent:boolean = false



const x: "yyy" = "yyy"

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

//union
type userRole = "guest" | "member" | "admin"
let role: userRole = "guest"

type User = {
    username: string
    role: userRole
}

const users: User[] = [
    {username:"Tanvir", role: "guest"},
    {username:"Hassan", role: "member"},
    {username:"Anik", role: "admin"}
]

function fetchUserDetails(username: string){
    const user = users.find(user => user.username.toLowerCase === username.toLowerCase)
    if(!user){
        throw new Error(`${username} not found`)
    }
}