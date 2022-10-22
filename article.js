const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf889814c4msh3b8802b627e0068p16ab57jsnb7e2da2e0043',
		'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
	}
};


const articleId = document.querySelector('.article-id');
const btnRandom = document.querySelector('.btn-random');


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



getHealthArtcile()

function getHealthArtcileIds() {
    fetch('https://medium2.p.rapidapi.com/topfeeds/health/top_month', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const topHealthArticles = data.topfeeds
            


           
            return fetch(`https://medium2.p.rapidapi.com/article/${id}/`, options)
        
                .then(response => response.json())
                .then(content => {
                    console.log(content)
                })
            }    
        })     
}
 
function getHealthArtcileInfo


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

