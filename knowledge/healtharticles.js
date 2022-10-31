const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "baeb14c53bmsh0028b401ca00f61p101d3ajsn1b306d4fbaf2",
    "X-RapidAPI-Host": "medium2.p.rapidapi.com",
  },
};

// const articleId = document.querySelector(".article-id");
// const btnRandom = document.querySelector(".btn-random");

// RANDOM ARTICLE GENERATOR
// function getRandomArtciles() {
// fetch('https://medium2.p.rapidapi.com/topfeeds/neuroscience/top_month', options)
// 	.then(response => response.json())
// 	.then(data => {
//         console.log(data)
//         const topNeuroArticles = data.topfeeds
//         const randomNumber = Math.random() * topNeuroArticles.length
//         const randomInterger = Math.floor(randomNumber)

//         const id = topNeuroArticles[randomInterger]
//         console.log(id);

//         return fetch(`https://medium2.p.rapidapi.com/article/${id}/content`, options);
//     })
//     .then(response => response.json())
//     .then(content => {
//         console.log(content)
//         articleId.innerHTML = content.content;
//     });

// }
// btnRandom.addEventListener('click', getRandomArtciles);

// let article1 = document.getElementById("article-1");
// let article2 = document.getElementById("article-2");
// let article3 = document.getElementById("article-3");
// let article4 = document.getElementById("article-4");
// let article5 = document.getElementById("article-5");
// let article6 = document.getElementById("article-6");
// let article7 = document.getElementById("article-7");
// let article8 = document.getElementById("article-8");
// let article9 = document.getElementById("article-9");
// let article10 = document.getElementById("article-10");


getHealthArtcileIds();

function getHealthArtcileIds() {
  fetch("https://medium2.p.rapidapi.com/topfeeds/health/top_month", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const topHealthArticles = data.topfeeds;

      let articleCount = 0;
      for (let i = 0; i < 10; i++) {
        fetch(
          `https://medium2.p.rapidapi.com/article/${topHealthArticles[i]}`,
          options
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const title = data.title
            const subtitle = data.subtitle;
            const date =data.published_at.slice(0,9);
            // const publication = data.publication_id;
            const image = data.image_url;
            const url = data.url

            var j = i+1;
            console.log(j)
            var article = document.getElementById(`article-${j}`);
                
            fetch(`https://medium2.p.rapidapi.com/user/${data.author}`, options)
	            .then(response => response.json())
	            .then((userData) => {
                    console.log(userData);
                    const author = userData.fullname
	            
                   if (data.publication_id === "*Self-Published*") {
                    article.innerHTML = `<a href=${url} class="article-link" >             
                        <div class="row g-4 my-5 py-3 justify-content-center">
                        <div class="col-9 col-md-3">
                        <img src=${image} class="img-fluid shadow-lg article-img" alt="">
                        </div>
                        <div class="col-9 col-md-6 d-flex flex-column justify-content-between">
                            <p class="article-title fw-bold">${title}</p>
                            <p class="article-subtitle">${subtitle}</p>
                            <div>
                                <span class="article-details">${author}</span>
                                <span class="article-details">${date}</span>
                                <span class="article-details">${data.publication_id}</span>
                            </div>
                        </div>
                    </div>
                    <a>`}
                    else {
                    fetch(`https://medium2.p.rapidapi.com/publication/${data.publication_id}`, options)
                        .then(response => response.json())
                        .then((data) => {
                            console.log(data);
                            const publication = data.name
                            // TAKE OFF TIME FROM DATE
                            // LIMIT PICTURE SIZE

                            // PUT FILTER/EFFECT ON PHOTOS TO MAKE COLOURS MORE HARMONIOUS?
                            article.innerHTML = `<a href=${url} class="article-link" >             
                                <div class="row g-4 my-5 py-3 justify-content-center">
                                <div class="col-9 col-md-3">
                                <img src=${image} class="img-fluid shadow-lg article-img" alt="">
                                </div>
                                <div class="col-9 col-md-6 d-flex flex-column justify-content-between">
                                    <p class="article-title fw-bold">${title}</p>
                                    <p class="article-subtitle">${subtitle}</p>
                                    <div>
                                        <span class="article-details">${author}</span>
                                        <span class="article-details">${date}</span>
                                        <span class="article-details">${publication}</span>
                                    </div>
                                </div>
                            </div>
                            <a>` 
        })             
            }

        
        })
        }
    )}
}
    )}
            


// function getHealthArtcileInfo

// use this before to generate 3 random numbers bewteen 1-25 and then use them inside fetch?

// const randomiseIndex = (count) => {
//     return Math.floor(count * Math.random());
// };

// const randomiseElements = (articles, count) => {
//     if (count > array.length) {
//         throw new Error ('Array size cannot be smaller than expected random numbers count.');
//     }
//     const result = [];
//     const guardian = new Set();
//     while (result.length < count) {
//         const index = randomiseIndex(count);
//         if (guardian.has(index)) {
//             continue;
//         }
//         const element = articles[index];
//         guardian.add(index);
//         result.push(element);
//     }
//     return result;
// };

// const element = randomiseElements(articles, 3);
// console.log(element);