//supply & price functions

let priceBtn = document.querySelector("#priceBtn");
let supplyBtn = document.querySelector("#supplyBtn");
let setPrice = document.querySelector("#setPrice");
let stock = document.querySelector("#stock");
let available = document.querySelector("#available");


priceBtn.addEventListener("click", addPrice);

function addPrice() {
  let price = prompt("How much are we selling our doughnuts today?!");

  setPrice.innerHTML = price;
  console.log(price)
  console.log("clicked");
};

supplyBtn.addEventListener("click", addStock);

function addStock() {
  let supply = prompt("How many doughnuts are we selling today?!");

  stock.innerHTML = supply;
  available.innerHTML = supply;
  console.log(supply)
  console.log("clicked");
};




//save purchase history

let name = document.querySelector("#name");
let qty = document.querySelector("#qty");
let saveBtn = document.querySelector("#save");
let history = document.querySelector("#history");
let total = document.querySelector("#total");
let sum = []


// name.addEventListener('input',()=>{
//     console.log(name.value)
// })

saveBtn.addEventListener("click",()=>{
    
    if(name.value && qty.value != ""){
        history.insertAdjacentHTML(
          "afterbegin",
          `<li class=" flex place-items-center border-b border-[#c0c0c0] py-5">
                    <span class="w-3/4">${name.value}</span> 
                    <span class="mx-5 flex w-1/4">${qty.value}</span>  
                    <span  class="bg-white shadow-md py-3 px-3 rounded-xl w-1/4 mr-3 border border-[#c0c0c0]">${qty.value}</span>
            </li>`
        );
        console.log(sum);
        name.value = "";
        qty.value = ""

                // sum.push(qty.value);
                // for (i = 0; i < sum.length; i++) {
                //   sum += sum[i];

                //   total.innerHTML = sum;
                // }

        return console.log("true");
        


    }else{
        return alert("please add name and quantity!")
    }
})
