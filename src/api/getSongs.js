function getSongs(keyword){
	const options = {
	method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'genius.p.rapidapi.com',
			'X-RapidAPI-Key': 'b347bc0983mshe9d646e8a29ed83p1b05b4jsn708feff2a216'
		}
	};

	return fetch('https://genius.p.rapidapi.com/search?q=' +keyword, options)
		.then(response => response.json())
		.then(res => res.response)
		.catch(err => console.error(err));
}


export default getSongs;