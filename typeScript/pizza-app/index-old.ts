const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

type pizza = {
    name: string,
    price: number
}

type order = {
    id: number,
    pizza: object,
    status: string
}

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: order[] = []

function addNewPizza(newPizza: pizza){
    menu.push(newPizza)
}

function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizza => {
        return pizza.name === pizzaName
    })

    if(!selectedPizza){
        console.error(`${pizzaName} does not exist`);
        return 
    }
    cashInRegister += selectedPizza.price;
    console.log(cashInRegister);

    const orderedPizza = {
        id:nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    }

    orderQueue.push(orderedPizza)
    console.log(orderQueue)
    return orderedPizza
}

function completeOrder(orderId: number){
    const order = orderQueue.find(order => order.id == orderId)
    if(!order){
        console.error(`given id does not exist`)
        return 
    }
    order.status = "completed"
    return order
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)