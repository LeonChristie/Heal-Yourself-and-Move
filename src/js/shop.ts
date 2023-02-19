let shop: HTMLElement = document.getElementById("shop")!;
let neuro: HTMLElement = document.getElementById("neuro")!;

let localData: string = localStorage.getItem('basketData')!

interface localBasketData {
    id: string,
    item: number
}

let basketShop: localBasketData[] | [] = JSON.parse(localData) || [];

let generateShop =()=>{    
    return (
        shop.innerHTML= shopItemsData.map((x) => {
        let{id,name,price,link,img}=x;
        let search = basketShop.find((x) => x.id === id) || [];
        return `
        <div id=prduct-id-${id} class="item">
        <a href=${link}> <img class="shop-img shadow-lg" src=${img} alt="">
          <div class="details"></a>
            <p class="fw-bold fs-2 pt-3">${name}</p>
            <div class="price-quantity">
                <p class="pb-1 fs-3">£ ${price}</p>

            </div>
          </div>
      </div>
        `
    }).join(""));

};

generateShop();

