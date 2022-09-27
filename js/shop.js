let shop = document.getElementById("shop");



let basket = JSON.parse(localStorage.getItem("basketData")) || [];

let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x) => {
        let{id,name,price,img}=x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=prduct-id-${id} class="item">
        <img class="shop-img" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <div class="price-quantity">
                <h4>£ ${price}</h4>
                    <div class="increments">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
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
    localStorage.setItem("basketData", JSON.stringify(basket));
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    update(selectedItem.id);    
    basket = basket.filter((x) =>  x.item !== 0);

    localStorage.setItem("basketData", JSON.stringify(basket));
};
let update = (id)=>{
 let search = basket.find((x) => x.id === id);   

 document.getElementById(id).innerHTML = search.item;
 calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y) => x + y, 0);
    
};

calculation();