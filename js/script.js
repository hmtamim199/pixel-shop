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
       <!-- <button class="btn btn-primary btn-outline w-[45%]"> <i class="fa-solid fa-calendar-week"></i>See
         details</button> -->
       <button class="btn btn-secondary btn-outline w-[45%]"> <i class="fa-solid fa-bag-shopping"></i>Buy
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
  <img class="w-full h-[300px]" src="${img}" alt="">
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
}