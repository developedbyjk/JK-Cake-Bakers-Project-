


// // import { menuArray } from "../data.js";

import menuArray from "./data.js";

const main = document.getElementById("main");



 document.addEventListener('DOMContentLoaded', () => {


let feedHtml = ``;

menuArray.forEach(function(item){
   feedHtml += `
               <div class="container">
               <div class="emoji" id="emoji">${item.emoji}</div>

               <div class="item">
                   <div class="item-name">${item.name}</div>
                
                   <div class="item-price">$${item.price}</div>
               </div>
               
               <div class="add">
                   <button id="${item.id}">+</button>
               </div>
           </div>
   
   
   `

})

main.innerHTML = feedHtml;

document.addEventListener("click",function(e){

    if(e.target.id){
        console.log("you clicked the  >> " + e.target.id)
        addToCart(e.target.id)
       
    }
    else if(e.target.dataset.myid){
        handelRemove(e.target.dataset.myid)

    }else if(e.target.dataset.credentials){
        detailPopUp()
    }

})


function addToCart(id){
   const fetchedItem =  menuArray.filter(function(items){
        return items.id == id
    })[0]

    console.log(fetchedItem)
    pushToNewArray(fetchedItem)
}


// let feedOrder = ``;
let arrayForOder = [];
function pushToNewArray(items){
    //pushing items in new array
    
    const ItemsObj = 
        {
            name: items.name,
            ingredients:items.ingredients,
            price: items.price,
            emoji: items.emoji,
            id: items.id
        }

    arrayForOder.push(ItemsObj);
    // console.log(arrayForOder);  
     
    getFromAnotherArray()
}


function getFromAnotherArray(){
    let totalPrice = 0;

    let feedNewItems = '';
    const NewItem =  arrayForOder.forEach(function(items){
                totalPrice +=items.price;

                    feedNewItems += `
        
                    <div class="o-s-item">
                        <p class="o-s-i-name">$${items.name}</p>
                         <p class="o-s-i-remove" " data-myid="${items.id}">remove</p>
                        <p class="o-s-i-price">$${items.price}</p>
                    </div>`
       
    })
    document.getElementById("orders-got").innerHTML = feedNewItems;

       totalCost(totalPrice)
}

function totalCost(totalPrice){

    document.getElementById("total-cost").innerHTML =`
    <hr>

    <div class="o-s-item">
        <p>Total Price</p>
        <p class="o-s-i-price">$${totalPrice}</p>
    </div>

    <button data-credentials="sdf"}>Complete Order</button>
    `
}


function handelRemove(id){
    const removeItem =  arrayForOder.filter(function(items){
        return items.id == id
    })[0]
    alert("are you sure you want to remove" + removeItem.id)
    console.log("before removation")
    console.log(arrayForOder)
    const idToDelete = removeItem.id;
    // Find the index of the object with the specified ID
const indexToDelete = arrayForOder.findIndex(obj => obj.id === idToDelete);

// If the object exists in the array, remove it
if (indexToDelete !== -1) {
    arrayForOder.splice(indexToDelete, 1);
  }

console.log("After removation")
console.log(arrayForOder)

 getFromAnotherArray()

}







function detailPopUp(){
    document.getElementById("detail-popup").style.display = "block";
}





const getForm = document.getElementById("myform");

getForm.addEventListener('submit', function(e){
    e.preventDefault()

    const NameInForm = new FormData(getForm)
    
    const myname = NameInForm.get('name')
    
    document.getElementById("detail-popup").style.display = "none";
    document.getElementById("order-section").innerHTML=`
    
    <div class="say-thanks">Thanks ${myname}! Your Order is on its way!</div>

    `


})


 })




