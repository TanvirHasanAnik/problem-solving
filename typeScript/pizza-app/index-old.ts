const menu: pizza[] = [
    {id: 1,name: "Margherita", price: 8},
    {id: 2,name: "Pepperoni", price: 10},
    {id: 3,name: "Hawaiian", price: 10},
    {id: 4,name: "Veggie", price: 9}
]

type pizza = {
    id: number
    name: string,
    price: number
}

type status = "ordered" | "completed"

type order = {
    id: number,
    pizza: object,
    status: status
}

let cashInRegister: number = 100
let nextOrderId: number = 1
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

    const orderedPizza:order = {
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

function getPizzaDetail(identifier: string | number){
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase === identifier.toLowerCase)
    }else {
        return menu.find(pizza => pizza.id === identifier)
    }
}

addNewPizza({id: 4,name: "Chicken Bacon Ranch", price: 12})
addNewPizza({id: 5,name: "BBQ chicken", price: 12})
addNewPizza({id: 6,name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order Queue:", orderQueue)