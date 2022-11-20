let counter = document.getElementById("counter-med");



let basketMed = JSON.parse(localStorage.getItem("basketData")) || [];


let generateCounter =()=>{
    let medArray = shopItemsData.slice(2,3)
    console.log(medArray)
    return (
        counter.innerHTML = medArray.map((x) => {
        let{id}=x;
        let search = basketMed.find((x) => x.id === id) || [];
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
    let search = basketMed.find((x)=> x.id === selectedItem.id);

    if(search === undefined){    
        basketMed.push({
            id: selectedItem.id,
            item: 1,  
        });
    }
    else{
        search.item += 1;
    }

    update(selectedItem.id);  
    localStorage.setItem("basketData", JSON.stringify(basketMed));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basketMed.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    update(selectedItem.id);    
    basketMed = basketMed.filter((x) =>  x.item !== 0);

    localStorage.setItem("basketData", JSON.stringify(basketMed));
}

let update = (id)=>{
    let search = basketMed.find((x) => x.id === id);   
   
    document.getElementById(id).innerHTML = search.item;
    calculation1();
   };
   
   let calculation1 = () => {
       let cartIcon = document.getElementById("cart-amount");
       cartIcon.innerHTML = basketMed.map((x)=> x.item).reduce((x, y) => x + y, 0);
       
   };



