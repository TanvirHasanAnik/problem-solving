let cashInRegister: number = 100
let nextOrderId: number = 1
let nextPizzaId: number = 1

type pizza = {
    id: number
    name: string,
    price: number
}

const menu: pizza[] = [
    {id: nextPizzaId++,name: "Margherita", price: 8},
    {id: nextPizzaId++,name: "Pepperoni", price: 9},
    {id: nextPizzaId++,name: "Hawaiian", price: 10},
    {id: nextPizzaId++,name: "Veggie", price: 9}
]

type status = "ordered" | "completed"

type order = {
    id: number,
    pizza: pizza,
    status: status
}
const orderQueue: order[] = []

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

function addNewPizza(newPizza: Omit<pizza,"id">): void {
    const pizza: pizza = {
        id: nextPizzaId++,
        ...newPizza
    }
    menu.push(pizza)
}

function placeOrder(pizzaName: string): order | undefined{
    const selectedPizza = menu.find(pizza => {
        return pizza.name === pizzaName
    })

    if(!selectedPizza){
        console.error(`${pizzaName} does not exist`);
        return 
    }
    cashInRegister += selectedPizza.price;
    console.log(cashInRegister);

    const orderedPizza:order = {
        id:nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    }

    orderQueue.push(orderedPizza)
    console.log(orderQueue)
    return orderedPizza
}

function completeOrder(orderId: number): order | undefined{
    const order = orderQueue.find(order => order.id == orderId)
    if(!order){
        console.error(`given id does not exist`)
        return 
    }
    order.status = "completed"
    return order
}

function getPizzaDetail(identifier: string | number) : pizza | undefined {
    if(typeof identifier === "string"){
        const pizza =  menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
        if(!pizza){
            throw new Error(`pizza not found`)
        }
        return pizza
    }else {
        const pizza =  menu.find(pizza => pizza.id === identifier)
        if(!pizza){
            throw new Error(`pizza not found`)
        }
        return pizza
    }
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)