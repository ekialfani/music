function getSongByKeyword(keyword){
	const options = {
	method: 'GET',
		headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'b347bc0983mshe9d646e8a29ed83p1b05b4jsn708feff2a216'
		}
	};

	return fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' +keyword, options)
		.then(response => response.json())
		.then(response => response)
		.catch(err => console.error(err));
}

function getSongById(id){
	const options = {
	method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
			'X-RapidAPI-Key': 'b347bc0983mshe9d646e8a29ed83p1b05b4jsn708feff2a216'
		}

	};

	return fetch('https://deezerdevs-deezer.p.rapidapi.com/track/' +id, options)
		.then(response => response.json())
		.then(response => response)
		.catch(err => console.error(err));
}

export { getSongByKeyword, getSongById };