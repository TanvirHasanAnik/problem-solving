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
    id: number
    username: string
    role: userRole
}

type updatedUser = Partial<User>
let nextUserId = 1
const users: User[] = [
    {id: nextUserId++,username:"Tanvir", role: "guest"},
    {id: nextUserId++,username:"Hassan", role: "member"},
    {id: nextUserId++,username:"Anik", role: "admin"}
]

function updateUser(id: number, updates:updatedUser){
    const user = users.find(user => user.id === id)
    if(!user){
        return 
    }
    Object.assign(user,updates)
}

updateUser(1,{username: "SUFFER ME"})

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username.toLowerCase === username.toLowerCase)
    if(!user){
        throw new Error(`${username} not found`)
    }
    return user
}

function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}


const gameScore = [1,2,3,4,5,6,7]
const stringArr = ["Hello", "TypeScript"]
const objArr = [{name:"hi"},{name:"hello"}]

function getLastItem<PlaceHolderType>(array: PlaceHolderType[]){
    return array[array.length - 1]
}

console.log(getLastItem(gameScore))
console.log(getLastItem(stringArr))
console.log(getLastItem(objArr))