const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'baeb14c53bmsh0028b401ca00f61p101d3ajsn1b306d4fbaf2',
		'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
	}
};

fetch('https://medium2.p.rapidapi.com/article/562c5821b5f0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
