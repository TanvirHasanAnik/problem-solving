// let str = "2 3 5 7 11";
// let arr = str.split(" ").map((x)=> Number(x));
// console.log(arr); // [2, 3, 5, 7, 11]

// // Generate a random number between 1000 and 9999
// const randomNumber = Math.floor(Math.random() * 9000) + 1000;

// console.log(randomNumber);  // Example output: 3749

// // let department = {
// //     name: 'CSE',
// //     printName: () => {
// //         console.log(this.name)
// //     }
// // }
// let institute = {
//   name: 'PSTU',
//   dpt: {
//     name: 'CSE',
//     printName:() => {
//         console.log('this in dpt',this, 'gg')
//         function an(){
//             console.log('this in another print name', this)
//         }
//         an()
//     }
// },
// }

// console.log('this in department',institute.dpt.printName.an())

// console.log('global',this)
// function test(){
//     console.log('function this', this)
// }
// test()
// const arrow = () => {
//     console.log('this in arrow',this)
// }
let obj = {
    name:'jamatul',
    print:(from) => {
        console.log('this is in obj arrow',this,from)
    }
}
// obj.print()
let anotherObj = {}
anotherObj.print = obj.print
// anotherObj.print()
obj.print.call(this,anotherObj,'another obj')

