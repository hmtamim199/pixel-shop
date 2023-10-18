let dataSet;

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    dataSet = data;
    displayData(data)
  })


function displayData(data) {
  const pageContent = document.getElementById('page-content');
  data.forEach((element) => {
    const { img, name, price, id } = element;
    const divContainer = document.createElement("div")
    divContainer.classList.add("card", "shadow-2xl", "p-4", "bg-base-100")
    divContainer.innerHTML = `
      
   
   <figure><img src=${img} alt="Shoes" /></figure>
   <div class="card-body">
     <div class="flex justify-between">
       <h2 class="card-title">${name}</h2>
       <span><i class="fa-solid fa-heart"></i></span>
       <span class=""><i class="fa-regular fa-square-minus"></i></span>
     </div>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <p class="text-2xl">price:${price}</p>
     <div class=" text-white">
       <label onclick="handleDetails('${id}')" for="my_modal_6" class="btn btn btn-primary btn-outline w-[45%]"><i
           class="fa-solid fa-calendar-week"></i>See
         details</label>
       <button 
       onclick="handleBuyNowBtn('${id}')"
       class="btn btn-secondary btn-outline w-[45%]"> <i class="fa-solid fa-bag-shopping"></i>Buy
         Now</button>

     </div>
   </div>
 
   
   `;
    pageContent.appendChild(divContainer)
  });
}

function handleDetails(id) {
  const product = dataSet.find((item) => item.id === id)
  const { img, price, name } = product;
  const modalContainer = document.getElementById('modal-info')
  modalContainer.innerHTML = `
  
  <div class="modal-box p-8">
  <img class="w-full h-[200px]" src="${img}" alt="">
  <h1 class="text-2xl font-bold">product: <span>${name}</span></h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime eum assumenda harum dolore voluptatum
    asperiores provident, impedit tenetur ipsa aliquid laborum tempora officiis? Atque ea facilis qui soluta
    accusamus?</p>
    <p class="font-bold text-lg">Price:${price}</p>
  <div class="modal-action">
    <label for="my_modal_6" class="btn">Close!</label>
  </div>
</div>
  
  `
};

let count = 0;
let newPrice = 0;
let tax = 0;
let grandTotal = 0;
function handleBuyNowBtn(id) {
  count = count + 1;
  const product = dataSet.find((item) => item.id === id)
  const { name, price, img } = product;
  newPrice = newPrice + product.price;
  tax = newPrice * 0.1;
  grandTotal = newPrice + tax;
  const cartContainer = document.getElementById('card-container');
  const div = document.createElement('div');
  div.classList.add("border-[2px]", "border-red-500", "rounded-lg", "m-2")
  div.innerHTML = `
  
  <div class="flex justify-between px-2 bg-gray-300 rounded-lg items-center">
    <img class="w-[15%] rounded-lg bg-gray-300" src="${img}" alt="">
    <h1>my product</h1>
    <p>1</p>
    <span class="text-2xl text-red-500"><i class="fa-solid fa-trash"></i></span>
  </div>

  
  `;
  cartContainer.appendChild(div);
  document.getElementById('badge-count').innerText = count;
  document.getElementById('product-count').innerText = count;
  document.getElementById('price').innerText = newPrice.toFixed(2);
  document.getElementById('tax-count').innerText = tax.toFixed(2);
  document.getElementById('total-price').innerText = grandTotal.toFixed(2);
}

function handleClearCart() {
  document.getElementById('card-container').innerHTML = "";
}