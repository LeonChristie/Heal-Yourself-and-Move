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

let basket = [];

let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x) => {
        let{id,name,price,img}=x;
        return `
        <div id=prduct-id-${id} class="item">
        <img class="shop-img" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
                <h4>£ ${price}</h4>
                    <div class="increments">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
            </div>
          </div>
      </div>
        `
    }).join(""));
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){    
        basket.push({
            id: selectedItem.id,
            item: 1,  
        });
    }
    else{
        search.item += 1;
    }


    update(selectedItem.id);  
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return;
    else{
        search.item -= 1;
    }


    update(selectedItem.id);
};
let update = (id)=>{
 let search = basket.find((x) => x.id === id);   
//  console.log(search.item);
 document.getElementById(id).innerHTML = search.item;
 calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML =basket.map((x)=> x.item).reduce((x, y) => x + y, 0);
    
};
