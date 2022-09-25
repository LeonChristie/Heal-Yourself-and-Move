let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "nuero",
    name: "Nueromove",
    price: 10,
    img: "/images/VectorNueromove.jpg",
},
{
    id: "vital",
    name: "Vitalimove",
    price: 10,
    img: "/images/Vitalimove.jpg", 
},
{
    id: "meditate",
    name: "Movitate",
    price: 10,
    img: "/images/Movitate.jpg", 
},    
{
    id: "oxygenate",
    name: "Seedmix",
    price: 1,
    img: "/images/Grow.jpg",
}];

let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x) => {
        let{id,name,price,img}=x;
        return `
    
        <div id=product-id-${id} class="row g-5 py-5 justify-content-center text-center">
          <div class="col-4">
            <a href="neuromove.html"><span><img src=${img} class="img-fluid rounded" alt=""></span></a>
            <h3 class="pt-3 fw-bold">${name}</h3>
            <h4 class="fw-bold">£ ${price}</h4>   
            <div class="increments">
              <button>-</button>
              <div class="quantity">0</div>
              <button>+</button>
          </div>
          </div>
        `
    }).join(""));
};

generateShop();

