
const options = {method: "GET",
headers: {
  "X-RapidAPI-Key": "baeb14c53bmsh0028b401ca00f61p101d3ajsn1b306d4fbaf2",
  "X-RapidAPI-Host": "medium2.p.rapidapi.com",
},
};


getSelfArtcileIds();

function getSelfArtcileIds() {
  fetch("https://medium2.p.rapidapi.com/topfeeds/self/top_month", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const topSelfArticles = data.topfeeds;

      let articleCount = 0;
      for (let i = 0; i < 10; i++) {
        fetch(
          `https://medium2.p.rapidapi.com/article/${topSelfArticles[i]}`,
          options
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const title = data.title
            const subtitle = data.subtitle;
            const date =data.published_at.slice(0,9);
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
                        <div class="col-2">
                        <img src=${image} class="img-fluid shadow-lg article-img" alt="">
                        </div>
                        <div class="col-5 d-flex flex-column justify-content-between">
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
                            article.innerHTML = `<a href=${url} class="article-link" >             
                                <div class="row g-4 my-5 py-3 justify-content-center">
                                <div class="col-2">
                                <img src=${image} class="img-fluid shadow-lg article-img" alt="">
                                </div>
                                <div class="col-5 d-flex flex-column justify-content-between">
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