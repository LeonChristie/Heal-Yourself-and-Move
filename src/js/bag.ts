let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let tableHead = document.getElementById("table-head");
let totalCheckout = document.getElementById("total-checkout");

let basket = JSON.parse(localStorage.getItem("basketData")) || [];


let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y) => x + y, 0);  
};

calculation();

let generateCartItems = () => {
    if(basket.length !==0){
        label.innerHTML  = `
        <div class="container my-5">
            <div class="row justify-content-center text-center">
                <div class="col my-5">
                    <h3 class="mb-4">Your items</h3>
                    <a href="shop.html" class="ctn-shop">Continue Shopping</a>
                </div>
            </div>
        </div>
        `;
        tableHead.innerHTML = `
        <div class="container">
        <div class="cart">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style="width: 11%">Item</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
          </div>
          </div>
          </div> 
        `;
        return (shoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let {img, name, price} = search;
            return `
            <div class="container">
            <div class="cart">
            <div class="table-responsive">
            <table class="table">
        <tbody>
        <tr>
        <td style="width: 10%">
          <div class="main">
            <div class="d-flex">
              <img src=${img} alt="" width="100" height="100">
            </div>
          </div>
        </td>
        <td>
          <h5>${name}</h5>
          <h6>Supplement Complex</h6>
          <a href="#" onclick="removeItem(${id})" class="remove-btn">Remove</a>
        </td>
        <td>
        <p>£ ${price}</p>
        </td>
        <td>
        <div class="increments bag">
            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            <div id=${id} class="quantity">(${item})</div>
            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
        </div>
        </td>
        <td>
          <pm>£ ${item*search.price}</p>
        </td>
      </tr>  
      </tbody>
      </table>   
      </div>
      </div>
      </div>     
      `;
        }).join(""));
    }
    else{
        
        label.innerHTML  = `
        <div class="container my-5">
            <div class="row justify-content-center text-center">
                <div class="col my-5">
                    <h3 class="mb-4">Your bag is empty</h3>
                    <a href="shop.html" class="ctn-shop">Continue Shopping</a>
                </div>
            </div>
        </div>
        `;
        tableHead.innerHTML = ``;
        shoppingCart.innerHTML = ``;
    }
};

generateCartItems();

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

    generateCartItems();
    update(selectedItem.id);  
    localStorage.setItem("basketData", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    update(selectedItem.id);    
    basket = basket.filter((x) =>  x.item !== 0);
    generateCartItems();
    totalAmount();
    localStorage.setItem("basketData", JSON.stringify(basket));
    
};

let update = (id) => {
 let search = basket.find((x) => x.id === id);   

 document.getElementById(id).innerHTML = search.item;
 calculation();
 totalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;

    basket = basket.filter((x) => x.id !== selectedItem.id);
 
    generateCartItems();
    totalAmount();
    localStorage.setItem("basketData", JSON.stringify(basket));
    
};

let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket
            .map((x) => {
                let { item, id} = x;
                let search = shopItemsData.find((y) => y.id === id) || [];

                return item * search.price;
            })
        .reduce((x, y) => x + y, 0);
        totalCheckout.innerHTML = `
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-4 offset-lg-4 mb-5">
                    <div class="checkout">
                        <div class="cart-total">Total
                            <span>£ ${amount}</span>
                        </div>
                    </div>
                    <a href="#" class="proceed-btn">Checkout</a>
                </div>
            </div>
        </div>
        `;  
    } else totalCheckout.innerHTML = ``;
};


totalAmount();
