let counter = document.getElementById("counter-seed");



let basketSeed = JSON.parse(localStorage.getItem("basketData")) || [];


let generateCounter =()=>{
    let seedArray = shopItemsData.slice(3,4)
    console.log(seedArray)
    return (
        counter.innerHTML = seedArray.map((x) => {
        let{id}=x;
        let search = basketSeed.find((x) => x.id === id) || [];
        return `
        <div id=prduct-id-${id} class="item">
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
    }).join(""))
    
};
generateCounter();


let increment = (id)=>{
    let selectedItem = id;
    let search = basketSeed.find((x)=> x.id === selectedItem.id);

    if(search === undefined){    
        basketSeed.push({
            id: selectedItem.id,
            item: 1,  
        });
    }
    else{
        search.item += 1;
    }

    update(selectedItem.id);  
    localStorage.setItem("basketData", JSON.stringify(basketSeed));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basketSeed.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    update(selectedItem.id);    
    basketSeed = basketSeed.filter((x) =>  x.item !== 0);

    localStorage.setItem("basketData", JSON.stringify(basketSeed));
}

let update = (id)=>{
    let search = basketSeed.find((x) => x.id === id);   
   
    document.getElementById(id).innerHTML = search.item;
    calculation1();
   };
   
   let calculation1 = () => {
       let cartIcon = document.getElementById("cart-amount");
       cartIcon.innerHTML = basketSeed.map((x)=> x.item).reduce((x, y) => x + y, 0);
       
   };



