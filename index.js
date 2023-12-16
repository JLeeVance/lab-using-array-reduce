const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((counter, element) => {
    return counter + element
}, 0)

//This is quite simple, so try to think how this could be used in a wider scale
//The reduce method takes in an Array, and reduces the array to one single
//value via a callback function
//In our example, the callback function happened to add the counter
//variable we set, which was 0, and the element of the array when it was passed over. 
//as It is going through the array, it will reasign the value of
//whatever variable we have declared!









// //Code from the demo below
// const products = [
//     { name: "Shampoo", price: 4.99 },
//     { name: "Donuts", price: 7.99 },
//     { name: "Cookies", price: 6.49 },
//     { name: "Bath Gel", price: 13.99 },
//   ];

// function getTotalAmountForProducts (products) {
//     let totalPrice = 0;
//     //We used a for .. of.. loop to iterate over the array
//     //products is the array we are passing in
//     //product is the var name we assigned to the objects that will be encountered
//     //as the iteration is done
//     for (const product of products) {
//         totalPrice += product.price;
//         //here we used the addition-assignment operator.
//         //this operator is used to add to whatever var is provided and reassign
//         //the outcome as the new var value
//     }
//     return totalPrice;
// }

// // console.log(getTotalAmountForProducts(products));


// //more code from example

// const couponLocations = [
//     { room: "Living room", amount: 5 },
//     { room: "Kitchen", amount: 2 },
//     { room: "Bathroom", amount: 1 },
//     { room: "Master bedroom", amount: 7 },
//   ];
  
// function ourReduce(arr, reducer, init) {
//     //this function accepts 3 arguements
//         //1. the array we are working with
//         //2. the callback function or "reducer"
//         //3. the initial amount of coupons we have
//     let accum = init;
//     //We intoduced the var for the initial amount of coupons we have within our function
//     for (const element of arr) {
//     //'For every 'element' (var we named, but array's contain elements) of our array
//       accum = reducer(accum, element);
//     }
//     return accum;
//   }
//   //The above code is abstracted out, making it more flexible

//   console.log(ourReduce(couponLocations, couponCounter, 3)); 
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }